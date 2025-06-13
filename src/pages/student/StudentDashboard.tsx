import { FC } from 'hono/jsx'
import { useUser } from '../../contexts/UserContext'
import StudentTemplate from '../../components/ui/templates/StudentTemplate'
import { Card } from '../../components/ui/molecules/Card'
import Text from '../../components/ui/atoms/Text'
import { StepIndicator } from '../../components/ui/molecules/StepIndicator'
import Alert from '../../components/ui/molecules/Alert'
import { ClearanceStatusTable } from '../../components/organisms/student/ClearanceStatusTable'

// Mock data - would come from API in real app
const clearanceSteps = [
  { id: '1', label: 'Library', status: 'completed', departmentName: 'Library' },
  { id: '2', label: 'Finance', status: 'current', departmentName: 'Finance' },
  { id: '3', label: 'Hostel', status: 'upcoming', departmentName: 'Hostel' },
  { id: '4', label: 'Department', status: 'upcoming', departmentName: 'Department' }
]

const clearanceItems = [
  {
    id: '1',
    department: 'Library',
    status: 'approved',
    submittedAt: '2025-05-01T09:00:00',
    updatedAt: '2025-05-02T14:30:00',
    documents: [{id: 'doc1', name: 'Library Card', path: '/docs/lib-card.pdf'}]
  },
  {
    id: '2',
    department: 'Finance',
    status: 'pending',
    submittedAt: '2025-05-03T10:15:00',
    updatedAt: '2025-05-03T10:15:00',
    documents: [{id: 'doc2', name: 'Fee Receipt', path: '/docs/receipt.pdf'}]
  },
  {
    id: '3',
    department: 'Hostel',
    status: 'rejected',
    submittedAt: '2025-05-04T11:20:00',
    updatedAt: '2025-05-05T09:45:00',
    feedback: 'Room inspection pending. Please complete checkout process first.',
    documents: [{id: 'doc3', name: 'Checkout Form', path: '/docs/checkout.pdf'}]
  }
]

type StudentDashboardProps = {
  // We're now getting user data from context
}

export const StudentDashboard: FC<StudentDashboardProps> = () => {
  const user = useUser();
  const studentName = user.fullName || '';
  const studentId = user.id || '';
  
  
 
  
  return (
    <StudentTemplate
      title="Dashboard"
      activeSection="dashboard"
    >
      {/* F-Pattern Content Organization */}
      <div className="space-y-6">
        {/* Top section - First horizontal scan (most important) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section (highest priority in F-pattern) */}
          <div className="lg:col-span-2">
            <Card title="Clearance Progress Summary" className="h-full">
              <div className="py-4">
                <Text size="lg" className="font-medium mb-2">Welcome, {studentName}</Text>
                <Text className="mb-4">Student ID: {studentId}</Text>
                
                <div className="mb-6">
                  <StepIndicator steps={clearanceSteps} />
                </div>
                
                <Alert 
                  type={clearanceSteps.some(step => step.status === 'rejected') ? 'error' : 'info'}
                  className="mt-4"
                >
                  {clearanceSteps.some(step => step.status === 'rejected') 
                    ? 'Action required: Some departments need your attention'
                    : 'Your clearance process is on track'}
                </Alert>
              </div>
            </Card>
          </div>
          
          {/* Right section of first row (secondary priority) */}
          <div className="lg:col-span-1">
            <Card title="Important Dates" className="h-full">
              <ul className="space-y-2 py-2">
                <li className="flex justify-between">
                  <span>Final submission</span>
                  <span className="font-medium">May 30, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Certificate issuance</span>
                  <span className="font-medium">June 10, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Graduation ceremony</span>
                  <span className="font-medium">July 15, 2025</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        
        {/* Middle section - Second horizontal scan */}
        <Card title="Clearance Status Details">
          <ClearanceStatusTable 
            items={clearanceItems}
            studentName={studentName}
            studentId={studentId}
          />
        </Card>
        
        {/* Bottom section - Lower priority in F-pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card title="Next Steps">
              <div className="py-2">
                <Text className="mb-2">To complete your clearance process:</Text>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Submit any missing documentation</li>
                  <li>Follow up with departments marked as 'Rejected'</li>
                  <li>Check back regularly for updates</li>
                </ul>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card title="Actions" className="h-full">
              <div className="flex flex-col space-y-3 py-2">
                <div id="certificate-container">
                  <button 
                    hx-get="/student/api/certificate/status"
                    hx-target="#certificate-container"
                    hx-swap="outerHTML"
                    hx-indicator="#certificate-loading"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                  >
                    Check Certificate Status
                  </button>
                  <div id="certificate-loading" className="htmx-indicator flex items-center justify-center py-2">
                    <div className="animate-spin h-5 w-5 mr-2 border-b-2 border-blue-600 rounded-full"></div>
                    <span>Checking...</span>
                  </div>
                </div>
                
                <a href="/student/documents" className="w-full text-center py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition">
                  View All Documents
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </StudentTemplate>
  )
}