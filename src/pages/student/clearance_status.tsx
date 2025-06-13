import { FC } from 'hono/jsx'
import StudentTemplate from '../../components/ui/templates/StudentTemplate'
import { Card } from '../../components/ui/molecules/Card'
import { StepIndicator } from '../../components/ui/molecules/StepIndicator'
import Text from '../../components/ui/atoms/Text'
import Alert from '../../components/ui/molecules/Alert'
import { Button } from '../../components/ui/atoms/Button'

// Mock data - would come from API in real app
const clearanceSteps = [
  { id: '1', label: 'Finance', status: 'completed', departmentName: 'Finance' },
  { id: '2', label: 'Hostel', status: 'completed', departmentName: 'Hostel' },
  { id: '3', label: 'Library', status: 'rejected', departmentName: 'Library' },
  { id: '4', label: 'Department', status: 'current', departmentName: 'Department' },
  { id: '5', label: 'IT Services', status: 'upcoming', departmentName: 'IT Services' },
  { id: '6', label: 'Certificate', status: 'upcoming', departmentName: 'Certificate' }
]

const clearanceDetails = [
  {
    id: '1',
    department: 'Finance Department',
    description: 'Tuition and fees',
    status: 'cleared',
    details: 'All tuition and fees have been paid.',
    lastUpdated: '2025-05-01',
    documents: [{id: 'doc1', name: 'Receipt', path: '/docs/receipt.pdf'}]
  },
  {
    id: '2',
    department: 'Hostel',
    description: 'Room checkout and fees',
    status: 'cleared',
    details: 'Room checkout completed successfully. No pending fees.',
    lastUpdated: '2025-04-25',
    documents: [{id: 'doc2', name: 'Checkout Form', path: '/docs/checkout.pdf'}]
  },
  {
    id: '3',
    department: 'Library',
    description: 'Outstanding books and fines',
    status: 'rejected',
    details: 'You have 2 overdue books and a fine of $15.',
    lastUpdated: '2025-05-05',
    action: 'Pay Fine'
  },
  {
    id: '4',
    department: 'Department',
    description: 'Course completion and projects',
    status: 'pending',
    details: 'Awaiting course completion verification from academic office.',
    lastUpdated: '2025-05-08',
    documents: [{id: 'doc3', name: 'Course List', path: '/docs/courses.pdf'}]
  },
  {
    id: '5',
    department: 'IT Services',
    description: 'Email and system accounts',
    status: 'not-started',
    details: 'Clearance process not yet initiated.'
  },
  {
    id: '6',
    department: 'Certificate',
    description: 'Final certificate issuance',
    status: 'not-started',
    details: 'All departments must be cleared first.'
  }
]

type ClearanceStatusProps = {
  studentName?: string
  studentId?: string
  userEmail?: string
}

const ClearanceStatus: FC<ClearanceStatusProps> = ({ 
  
}) => {
  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { bg: string, text: string }> = {
      'cleared': { bg: 'bg-green-100', text: 'text-green-800' },
      'rejected': { bg: 'bg-red-100', text: 'text-red-800' },
      'pending': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'not-started': { bg: 'bg-gray-100', text: 'text-gray-800' }
    }
    
    const style = statusMap[status] || { bg: 'bg-gray-100', text: 'text-gray-800' }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const getCompletionPercentage = () => {
    const completedSteps = clearanceSteps.filter(step => step.status === 'completed').length
    return Math.round((completedSteps / clearanceSteps.length) * 100)
  }
    return (
    <StudentTemplate
      title="Clearance Status"
      activeSection="clearance_status"
    >
      <div className="space-y-6">
        {/* Top section - Summary Card */}
        <Card title="Clearance Progress Summary">
          <div className="py-4">
            <div className="mb-6">
              <StepIndicator steps={clearanceSteps} />
            </div>
            
            <div className="mb-2">
              <Text size="sm" className="flex justify-between mb-1">
                <span>Overall Progress</span>
                <span>{getCompletionPercentage()}%</span>
              </Text>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{width: `${getCompletionPercentage()}%`}}
                ></div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {clearanceSteps.filter(step => step.status === 'completed').length} of {clearanceSteps.length} departments cleared
              </span>
            </div>
            
            {clearanceSteps.some(step => step.status === 'rejected') && (
              <Alert 
                type="error" 
                className="mt-4"
              >
                Action required: You have issues that need attention in some departments
              </Alert>
            )}
          </div>
        </Card>
        
        {/* Detailed status card */}
        <Card title="Detailed Status">
          <div className="divide-y">
            {clearanceDetails.map((item) => (
              <div key={item.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="ml-0">
                      <Text className="font-medium">{item.department}</Text>
                      <Text size="sm" className="text-gray-500">{item.description}</Text>
                    </div>
                  </div>
                  <div>
                    {getStatusBadge(item.status)}
                  </div>
                </div>
                
                <Text size="sm" className="text-gray-600 mb-2">
                  {item.details}
                </Text>
                
                {item.lastUpdated && (
                  <div className="mt-2 flex justify-between items-center">
                    <Text size="xs" className="text-gray-500">
                      Last updated: {item.lastUpdated}
                    </Text>
                    
                    <div className="flex space-x-2">
                      {item.documents && item.documents.length > 0 && (
                        <Button size="sm" variant="outline">
                          View Documents
                        </Button>
                      )}
                      
                      {item.action && (
                        <Button size="sm">
                          {item.action}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
        
        {/* Next Steps card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card title="Next Steps">
              <div className="p-4">
                <Text className="mb-2">To complete your clearance process:</Text>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Pay outstanding library fine to clear Library department</li>
                  <li>Follow up with your academic department for course completion verification</li>
                  <li>Prepare for IT Services clearance once department clearance is obtained</li>
                </ul>
                <Alert type="info">
                  All departments must be cleared before certificate issuance
                </Alert>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card title="Deadlines" className="h-full">
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Final clearance</span>
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
              </div>
            </Card>
          </div>
        </div>
      </div>
    </StudentTemplate>
  )
}

export default ClearanceStatus
