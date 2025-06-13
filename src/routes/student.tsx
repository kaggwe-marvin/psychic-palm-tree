import { Context, Hono } from "hono";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";
import { mapUserForContext } from "../lib/userHelper";
import { UserProvider } from "../contexts/UserContext";
import { StudentDashboard } from "../pages/student/StudentDashboard";
import ClearanceStatus from "../pages/student/clearance_status";
import Documents from "../pages/student/documents_new";
import Profile from "../pages/student/profile";
import Finance from "../pages/student/finance";
import Library from "../pages/student/library";
import { drizzle } from "drizzle-orm/d1";
import { clearanceItems, clearanceRequests, documents, requirements } from "../db/schema";
import { eq } from "drizzle-orm";
import Text from "../components/ui/atoms/Text";
import DocumentUploadForm from "../components/ui/molecules/DocumentUploadForm";
import { Button } from "../components/ui/atoms/Button";
import { nanoid } from "nanoid";


const app = new Hono<{Bindings: Bindings; Variables: Variables}>();

// Helper function to handle user checks and context wrapping
const withUserContext = (c: Context, Component: any) => {
  const luciaUser = c.get('user');
  if (!luciaUser) {
    return c.notFound();
  }
  
  // Map Lucia user to our UserContext User type
  const user = mapUserForContext(luciaUser);
  
  return c.html(
    <UserProvider user={user}>
      {Component}
    </UserProvider>
  );
}

app
.use('*', requireRole(['student']))
.get('/', (c) => withUserContext(c, <StudentDashboard />))
.get('/clearance_status', (c) => withUserContext(c, <ClearanceStatus />))
.get('/documents', (c) => withUserContext(c, <Documents />))
.get('/profile', (c) => withUserContext(c, <Profile />))
.get('/finance', (c) => withUserContext(c, <Finance />))
.get('/library', (c) => withUserContext(c, <Library />))



.post('/documents/upload', async (c) => {
  const luciaUser = c.get('user');
  if (!luciaUser) return c.text('Unauthorized', 401);
  
  const db = drizzle(c.env.DB);
  
  try {
    const formData = await c.req.formData();
    const requirementId = formData.get('requirementId')?.toString();
    const comments = formData.get('comments')?.toString() || '';
    const file = formData.get('document') as File;
    
    if (!requirementId) {
      return c.html(
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Missing requirement ID.</span>
        </div>
      );
    }
    
    if (!file) {
      return c.html(
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> No file was uploaded.</span>
        </div>
      );
    }
    
    // Generate a unique ID for the document
    const documentId = nanoid();
    
    // Upload file to R2
    const fileExtension = file.name.split('.').pop();
    const fileName = `${luciaUser.id}/${documentId}.${fileExtension}`;
    
    await c.env.BKT.put(fileName, file.stream());
    
    // Simplified: Save only the document without the clearance logic
    await db.insert(documents).values({
      id: documentId,
      clearanceItemId: 'none', // Using a default value to satisfy the constraint
      fileName: file.name,
      fileKey: fileName,
      fileSize: file.size,
      mimeType: file.type,
      uploadedBy: luciaUser.id,
      createdAt: new Date().toISOString(),
      status: 'pending'
    });
    
    // Success response
    return c.html(
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Document uploaded successfully.</span>
      </div>
    );
    
  } catch (error) {
    console.error('Error uploading document:', error);
    
    return c.html(
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Failed to upload document: {error.message}</span>
      </div>
    );
  }
})
.post('/documents/:id/delete', async (c) => {
  const luciaUser = c.get('user');
  if (!luciaUser) return c.text('Unauthorized', 401);
  
  const db = drizzle(c.env.DB);
  const documentId = c.req.param('id');
  
  try {
    // Get document info
    const [document] = await db.select()
      .from(documents)
      .where(eq(documents.id, documentId))
      .limit(1);
    
    if (!document) {
      return c.text('Document not found', 404);
    }
    
    // Check if user owns this document - fixed to use uploadedBy field
    if (document.uploadedBy !== luciaUser.id) {
      return c.text('Unauthorized', 403);
    }
    
    // Delete from R2 bucket
    await c.env.BKT.delete(document.fileKey);
    
    // Delete from database
    await db.delete(documents)
      .where(eq(documents.id, documentId));
    
    // Redirect back to documents page
    return c.redirect('/student/documents');
  } catch (error) {
    console.error('Error deleting document:', error);
    return c.text(`Error deleting document: ${error.message}`, 500);
  }
})

.get('/api/documents/requirements', async (c) => {
  const luciaUser = c.get('user');
  if (!luciaUser) return c.text('Unauthorized', 401);
  
  const db = drizzle(c.env.DB);
  
  try {
    // Get all requirements
    const allRequirements = await db.select().from(requirements);
    
    // Get user's submitted documents
    // Changed this query to match your schema - documents are linked to uploadedBy not userId
    const userDocuments = await db.select()
      .from(documents)
      .where(eq(documents.uploadedBy, luciaUser.id));
    
    // Map of requirementId to document
    const documentsByRequirement = new Map();
    userDocuments.forEach(doc => {
      documentsByRequirement.set(doc.requirementId, doc);
    });
    
    return c.html(
      <div className="space-y-4">
        {allRequirements.length === 0 ? (
          <Text className="text-center py-6 text-gray-500">
            No document requirements found.
          </Text>
        ) : (
          allRequirements.map(requirement => {
            const submittedDocument = documentsByRequirement.get(requirement.id);
            return (
              <DocumentUploadForm
                key={requirement.id}
                requirementId={requirement.id}
                requirementName={requirement.name}
                alreadySubmitted={!!submittedDocument}
                documentId={submittedDocument?.id}
              />
            );
          })
        )}
      </div>
    );
  } catch (error) {
    console.error('Error loading requirements:', error);
    
    return c.html(
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Failed to load requirements: {error.message}</span>
      </div>
    );
  }
})

.get('/api/documents/all', async (c) => {
  const luciaUser = c.get('user');
  if (!luciaUser) return c.text('Unauthorized', 401);
  
  const db = drizzle(c.env.DB);
  
  try {
    // Get all user's documents with requirement information - updated to use uploadedBy
    const userDocuments = await db.select({
      document: documents,
      requirement: requirements
    })
    .from(documents)
    .leftJoin(requirements, eq(documents.requirementId, requirements.id))
    .where(eq(documents.uploadedBy, luciaUser.id))
    .orderBy(documents.createdAt);
    
    return c.html(
      <div className="overflow-x-auto">
        {userDocuments.length === 0 ? (
          <Text className="text-center py-6 text-gray-500">
            You haven't submitted any documents yet.
          </Text>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requirement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userDocuments.map(({ document, requirement }) => (
                <tr key={document.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Text className="text-sm font-medium text-gray-900">
                      {requirement?.name || 'Unknown Requirement'}
                    </Text>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Text className="text-sm text-gray-500">
                      {document.fileName}
                    </Text>
                    <Text className="text-xs text-gray-400">
                      {(document.fileSize / 1024).toFixed(2)} KB
                    </Text>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Text className="text-sm text-gray-500">
                      {new Date(document.createdAt).toLocaleDateString()}
                    </Text>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      document.status === 'approved' 
                        ? 'bg-green-100 text-green-800' 
                        : document.status === 'rejected' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button
                        type="button"
                        hx-get={`/student/api/documents/view/${document.id}`}
                        hx-target="#document-preview"
                        hx-swap="outerHTML"
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </Button>
                      
                      <form
                        method="POST"
                        action={`/student/documents/${document.id}/delete`}
                        className="inline"
                      >
                        <Button
                          type="submit"
                          className="text-red-600 hover:text-red-800"
                          onClick={(e) => {
                            if (!confirm("Are you sure you want to delete this document? You'll need to re-upload it.")) {
                              e.preventDefault();
                            }
                          }}
                        >
                          Delete
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
        {/* Document Preview Modal */}
        <div id="document-preview" className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Content will be loaded here */}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading documents:', error);
    
    return c.html(
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Failed to load documents: {error.message}</span>
      </div>
    );
  }
})

.get('/api/documents/view/:id', async (c) => {
  const luciaUser = c.get('user');
  if (!luciaUser) return c.text('Unauthorized', 401);
  
  const db = drizzle(c.env.DB);
  const documentId = c.req.param('id');
  
  try {
    // Get document info
    const [document] = await db.select()
      .from(documents)
      .where(eq(documents.id, documentId))
      .limit(1);
    
    if (!document) {
      return c.text('Document not found', 404);
    }
    
    // Check if user owns this document - updated to use uploadedBy
    if (document.uploadedBy !== luciaUser.id) {
      return c.text('Unauthorized', 403);
    }
    
    // Generate a temporary URL for viewing
    const url = await c.env.BKT.createPresignedUrl(document.fileKey, 900); // 15 minutes
    
    // Render document preview, updating fileType to mimeType
    return c.html(
      <div className="relative w-full max-w-4xl h-5/6 bg-white p-4 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{document.fileName}</h3>
          <button 
            className="text-gray-400 hover:text-gray-500"
            onClick="document.getElementById('document-preview').classList.add('hidden')"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Document preview */}
        <div className="h-full">
          {document.mimeType === 'application/pdf' ? (
            <iframe 
              src={url} 
              className="w-full h-5/6" 
              title={document.fileName}
            ></iframe>
          ) : (
            <img 
              src={url} 
              alt={document.fileName} 
              className="max-h-full max-w-full mx-auto object-contain"
            />
          )}
        </div>
        
        {/* Document metadata */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Status: <span className={`font-medium ${
              document.status === 'approved' ? 'text-green-600' :
              document.status === 'rejected' ? 'text-red-600' :
              'text-yellow-600'
            }`}>
              {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
            </span>
          </p>
          
          {document.comments && (
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700">Your comments:</p>
              <p className="text-sm text-gray-600 italic">{document.comments}</p>
            </div>
          )}
          
          {document.feedback && (
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700">Staff feedback:</p>
              <p className="text-sm text-gray-600 italic">{document.feedback}</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    // Error handling...
  }
})


export default app