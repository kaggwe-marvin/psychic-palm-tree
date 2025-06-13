import { FC } from 'hono/jsx';
import StaffTemplate from '../../components/ui/templates/StaffTemplate';
import { Card } from '../../components/ui/molecules/Card';
import Text from '../../components/ui/atoms/Text';
import Alert from '../../components/ui/molecules/Alert';
import { Button } from '../../components/ui/atoms/Button';
import Badge from '../../components/ui/atoms/Badge';
import { DocumentReviewForm } from '../../components/organisms/staff/DocumentReviewForm';

// Mock data for pending requests - would come from API in real implementation
const pendingRequests = [
  {
    id: '1',
    studentName: 'John Doe',
    studentId: 'S12345',
    department: 'Library',
    submittedAt: '2025-05-08T14:30:00',
    documents: [
      { id: 'doc1', name: 'Library Clearance Form.pdf', type: 'application/pdf', size: 450000, url: '/documents/library-form.pdf' },
      { id: 'doc2', name: 'Fine Receipt.pdf', type: 'application/pdf', size: 280000, url: '/documents/fine-receipt.pdf' }
    ],
    notes: 'Requesting approval for library clearance. All books returned and fines paid.',
    history: [
      { action: 'Submitted', timestamp: '2025-05-08T14:30:00', actor: 'John Doe (Student)' },
      { action: 'Reviewed', timestamp: '2025-05-09T09:15:00', actor: 'Sarah Johnson (Library Staff)' },
      { action: 'Additional documents requested', timestamp: '2025-05-09T09:30:00', actor: 'Sarah Johnson (Library Staff)' },
      { action: 'Documents uploaded', timestamp: '2025-05-10T11:45:00', actor: 'John Doe (Student)' }
    ]
  },
  {
    id: '2',
    studentName: 'Jane Smith',
    studentId: 'S67890',
    department: 'Finance',
    submittedAt: '2025-05-10T10:15:00',
    documents: [
      { id: 'doc3', name: 'Tuition Receipt.pdf', type: 'application/pdf', size: 520000, url: '/documents/tuition-receipt.pdf' },
      { id: 'doc4', name: 'Payment History.pdf', type: 'application/pdf', size: 750000, url: '/documents/payment-history.pdf' }
    ],
    notes: 'All outstanding fees have been paid. Requesting financial clearance.',
    history: [
      { action: 'Submitted', timestamp: '2025-05-10T10:15:00', actor: 'Jane Smith (Student)' }
    ]
  },
  {
    id: '3',
    studentName: 'Alice Johnson',
    studentId: 'S54321',
    department: 'Hostel',
    submittedAt: '2025-05-09T16:20:00',
    documents: [
      { id: 'doc5', name: 'Room Checkout Form.pdf', type: 'application/pdf', size: 320000, url: '/documents/checkout-form.pdf' },
      { id: 'doc6', name: 'Property Return Form.pdf', type: 'application/pdf', size: 410000, url: '/documents/property-form.pdf' }
    ],
    notes: 'Room checkout completed. All hostel property returned without damage.',
    history: [
      { action: 'Submitted', timestamp: '2025-05-09T16:20:00', actor: 'Alice Johnson (Student)' },
      { action: 'Inspection scheduled', timestamp: '2025-05-10T09:00:00', actor: 'Robert Davis (Hostel Manager)' }
    ]
  }
];

type ApprovalsProps = {
  staffName?: string
  staffEmail?: string
  departmentName?: string
}

const Approvals: FC<ApprovalsProps> = ({ 
}) => {
  // In a real implementation, these would be actual handlers
  const handleApprove = (requestId: string, feedback: string) => {
    console.log(`Approve request ${requestId} with feedback: ${feedback}`);
    // Would send approval to API
  };

  const handleReject = (requestId: string, feedback: string) => {
    console.log(`Reject request ${requestId} with feedback: ${feedback}`);
    // Would send rejection to API
  };

  const handleRequestMoreInfo = (requestId: string, feedback: string) => {
    console.log(`Request more info for ${requestId} with feedback: ${feedback}`);
    // Would send request for more info to API
  };

  const handleViewDocument = (documentUrl: string) => {
    console.log(`Viewing document at ${documentUrl}`);
    // Would open document in new tab or modal
    window.open(documentUrl, '_blank');
  };

  return (
    <StaffTemplate 
      title="Pending Requests" 
      activeSection="approvals"
    >
      <div className="space-y-6">
        {/* Summary Statistics Card */}
        <Card title="Clearance Requests Summary">
          <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Text size="sm" className="text-blue-700">Total Requests</Text>
                <Text size="xl" className="font-bold">42</Text>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <Text size="sm" className="text-yellow-700">Pending</Text>
                <Text size="xl" className="font-bold">{pendingRequests.length}</Text>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <Text size="sm" className="text-green-700">Approved (This Week)</Text>
                <Text size="xl" className="font-bold">18</Text>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <Text size="sm" className="text-red-700">Rejected (This Week)</Text>
                <Text size="xl" className="font-bold">5</Text>
              </div>
            </div>
            
            <Alert type="info">
              Review all pending requests promptly. Students are waiting for your approval to proceed with their clearance process.
            </Alert>
          </div>
        </Card>

        {/* Filters and Search - Using F-pattern layout for easy scanning */}
        <Card title="Filter & Search">
          <div className="py-4">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="w-full md:w-auto flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select 
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-sm"
                >
                  <option value="all">All Departments</option>
                  <option value="library">Library</option>
                  <option value="finance">Finance</option>
                  <option value="hostel">Hostel</option>
                  <option value="department">Academic Department</option>
                </select>
              </div>
              <div className="w-full md:w-auto flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Submitted
                </label>
                <select 
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-sm"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="this_week">This Week</option>
                  <option value="this_month">This Month</option>
                </select>
              </div>
              <div className="w-full md:w-auto flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search by student name or ID"
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-sm"
                />
              </div>
              <div>
                <Button>
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Pending Requests List */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Pending Requests ({pendingRequests.length})</h2>
          
          {pendingRequests.map(request => (
            <Card key={request.id} className="border-l-4 border-l-yellow-500">
              <div className="py-4">
                {/* Request Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Text size="lg" className="font-semibold">{request.studentName}</Text>
                    <div className="flex items-center mt-1">
                      <Badge variant="info" className="mr-2">{request.studentId}</Badge>
                      <Text size="sm" className="text-gray-500">
                        Submitted on {new Date(request.submittedAt).toLocaleString()}
                      </Text>
                    </div>
                  </div>
                  <Badge variant="warning">Pending</Badge>
                </div>

                {/* Department and Notes */}
                <div className="mb-4">
                  <Text size="sm" className="font-medium text-gray-700">Department</Text>
                  <Text className="mb-2">{request.department}</Text>
                  
                  <Text size="sm" className="font-medium text-gray-700">Notes</Text>
                  <Text className="italic">{request.notes}</Text>
                </div>

                {/* Documents */}
                <div className="mb-4">
                  <Text size="sm" className="font-medium text-gray-700 mb-2">Submitted Documents</Text>
                  <div className="bg-gray-50 rounded-md border border-gray-200">
                    <ul className="divide-y divide-gray-200">
                      {request.documents.map(doc => (
                        <li key={doc.id} className="flex items-center justify-between py-3 px-4">
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                            <div>
                              <Text size="sm" className="font-medium">{doc.name}</Text>
                              <Text size="xs" className="text-gray-500">{(doc.size / 1024 / 1024).toFixed(2)} MB</Text>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewDocument(doc.url)}
                          >
                            View
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action History */}
                <div className="mb-4">
                  <Text size="sm" className="font-medium text-gray-700 mb-2">Request History</Text>
                  <div className="pl-4 border-l-2 border-gray-200">
                    {request.history.map((event, index) => (
                      <div key={index} className="mb-2 relative">
                        <div className="h-2 w-2 rounded-full bg-blue-500 absolute -left-[17px] top-2"></div>
                        <Text size="sm" className="font-medium">{event.action}</Text>
                        <Text size="xs" className="text-gray-500">
                          {new Date(event.timestamp).toLocaleString()} by {event.actor}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review Form */}
                <div className="mt-6">
                  <Text size="md" className="font-semibold mb-3">Review Decision</Text>
                  <DocumentReviewForm
                    onApprove={(feedback) => handleApprove(request.id, feedback)}
                    onReject={(feedback) => handleReject(request.id, feedback)}
                    onRequestMoreInfo={(feedback) => handleRequestMoreInfo(request.id, feedback)}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
              1
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
      </div>
    </StaffTemplate>
  );
}

export default Approvals;