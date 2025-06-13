import { FC } from 'hono/jsx';
import Text from '../atoms/Text';
import { Button } from '../atoms/Button';

interface DocumentUploadFormProps {
  requirementId: string;
  requirementName: string;
  alreadySubmitted?: boolean;
  documentId?: string;
}

const DocumentUploadForm: FC<DocumentUploadFormProps> = ({
  requirementId,
  requirementName,
  alreadySubmitted = false,
  documentId
}) => {
  return (
    <div className="border p-4 rounded-lg mb-4">
      <Text className="font-medium mb-2">{requirementName}</Text>
      
      {alreadySubmitted ? (
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Submitted
            </span>
            <Text className="text-sm">Document has been submitted</Text>
          </div>
          
          <div className="flex space-x-2">
            <Button
              type="button"
              hx-get={`/student/api/documents/view/${documentId}`}
              hx-target="#document-preview"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
            >
              View
            </Button>
            
            <form
              method="POST"
              action={`/student/documents/${documentId}/delete`}
              className="inline"
            >
              <Button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
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
        </div>
      ) : (
        <form
          method="POST"
          action="/student/documents/upload"
          enctype="multipart/form-data"
          hx-post="/student/documents/upload"
          hx-target="#alerts-container"
          hx-swap="innerHTML"
          hx-encoding="multipart/form-data"
        >
          <input type="hidden" name="requirementId" value={requirementId} />
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Document (PDF, JPG, PNG)
            </label>
            <input
              type="file"
              name="document"
              accept=".pdf,.jpg,.jpeg,.png"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              required
            />
            <Text className="text-xs text-gray-500 mt-1">
              Max file size: 5MB
            </Text>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comments (Optional)
            </label>
            <textarea
              name="comments"
              rows={2}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2.5"
              placeholder="Any notes about this document..."
            ></textarea>
          </div>
          
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2"
          >
            Submit Document
          </Button>
        </form>
      )}
    </div>
  );
};

export default DocumentUploadForm;