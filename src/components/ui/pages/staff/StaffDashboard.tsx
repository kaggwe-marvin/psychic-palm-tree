import { FC } from 'hono/jsx'
import StaffTemplate from '../../templates/StaffTemplate'
import { Card } from '../../molecules/Card'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Alert } from '../../molecules/Alert'

// Mock data - would come from API in real app
const pendingRequests = [
  {
    id: '1',
    studentName: 'Jane Smith',
    studentId: 'ST2025001',
    requestType: 'Library Clearance',
    submittedAt: '2025-05-10T09:00:00',
    status: 'pending'
  },
  {
    id: '2',
    studentName: 'Michael Brown',
    studentId: 'ST2025042',
    requestType: 'Book Return',
    submittedAt: '2025-05-09T14:30:00',
    status: 'pending'
  },
  {
    id: '3',
    studentName: 'Sarah Johnson',
    studentId: 'ST2025018',
    requestType: 'Fine Payment',
    submittedAt: '2025-05-11T10:15:00',
    status: 'pending'
  }
]

const recentActivity = [
  {
    id: '1',
    action: 'Approved Library Clearance',
    studentName: 'David Wilson',
    studentId: 'ST2025005',
    timestamp: '2025-05-11T15:30:00'
  },
  {
    id: '2',
    action: 'Rejected Book Return',
    studentName: 'Emily Clark',
    studentId: 'ST2025022',
    feedback: 'Book damaged, replacement fee required',
    timestamp: '2025-05-11T14:45:00'
  },
  {
    id: '3',
    action: 'Approved Fine Payment',
    studentName: 'Thomas Lee',
    studentId: 'ST2025037',
    timestamp: '2025-05-11T13:20:00'
  }
]

// Department stats would come from API in real app
const departmentStats = {
  totalStudents: 245,
  clearedStudents: 178,
  pendingRequests: 43,
  rejectedRequests: 24
}

type StaffDashboardProps = {
  staffName: string
  staffEmail: string
  departmentName: string
}

export const StaffDashboard: FC<StaffDashboardProps> = ({ 
  staffName, 
  departmentName 
}) => {
  const handleViewRequest = (requestId: string) => {
    console.log('View request:', requestId)
  }

  const getPendingPercentage = () => {
    return Math.round((departmentStats.clearedStudents / departmentStats.totalStudents) * 100)
  }
  
  return (
    <StaffTemplate
      title="Staff Dashboard"
      activeSection="dashboard"
    >
      {/* F-Pattern Content Organization */}
      <div className="space-y-6">
        {/* Top section - First horizontal scan (most important) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section (highest priority in F-pattern) */}
          <div className="lg:col-span-2">
            <Card title="Department Overview" className="h-full">
              <div className="py-4">
                <Text size="lg" className="font-medium mb-2">Welcome, {staffName}</Text>
                <Text className="mb-4">{departmentName} Department</Text>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Text size="xl" className="font-bold text-blue-700">{departmentStats.totalStudents}</Text>
                    <Text size="sm" className="text-blue-600">Total Students</Text>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Text size="xl" className="font-bold text-green-700">{departmentStats.clearedStudents}</Text>
                    <Text size="sm" className="text-green-600">Cleared</Text>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <Text size="xl" className="font-bold text-yellow-700">{departmentStats.pendingRequests}</Text>
                    <Text size="sm" className="text-yellow-600">Pending</Text>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <Text size="xl" className="font-bold text-red-700">{departmentStats.rejectedRequests}</Text>
                    <Text size="sm" className="text-red-600">Rejected</Text>
                  </div>
                </div>
                
                <div className="mb-2">
                  <Text size="sm" className="flex justify-between mb-1">
                    <span>Clearance Progress</span>
                    <span>{getPendingPercentage()}%</span>
                  </Text>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{width: `${getPendingPercentage()}%`}}
                    ></div>
                  </div>
                </div>
                
                <Alert type="info" className="mt-6">
                  You have {departmentStats.pendingRequests} pending requests that require your attention
                </Alert>
              </div>
            </Card>
          </div>
          
          {/* Right section of first row (secondary priority) */}
          <div className="lg:col-span-1">
            <Card title="Important Dates" className="h-full">
              <ul className="space-y-2 py-2">
                <li className="flex justify-between">
                  <span>Clearance deadline</span>
                  <span className="font-medium">May 30, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Final submission</span>
                  <span className="font-medium">June 5, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Department meeting</span>
                  <span className="font-medium">May 15, 2025</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        
        {/* Middle section - Second horizontal scan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Requests */}
          <Card title="Recent Pending Requests">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Student</th>
                    <th className="px-4 py-2 text-left">Request Type</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRequests.map((request) => (
                    <tr key={request.id} className="border-t">
                      <td className="px-4 py-3">
                        <div>
                          <Text className="font-medium">{request.studentName}</Text>
                          <Text size="xs" className="text-gray-500">{request.studentId}</Text>
                        </div>
                      </td>
                      <td className="px-4 py-3">{request.requestType}</td>
                      <td className="px-4 py-3">
                        {new Date(request.submittedAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <Button 
                          size="sm" 
                          onClick={() => handleViewRequest(request.id)}
                        >
                          Review
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right">
              <Button variant="secondary" size="sm">View All Requests</Button>
            </div>
          </Card>
          
          {/* Recent Activity */}
          <Card title="Recent Activity">
            <div className="divide-y">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="px-4 py-3">
                  <div className="flex justify-between">
                    <Text className="font-medium">{activity.action}</Text>
                    <Text size="xs" className="text-gray-500">
                      {new Date(activity.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </Text>
                  </div>
                  <Text size="sm" className="text-gray-600">
                    {activity.studentName} ({activity.studentId})
                  </Text>
                  {activity.feedback && (
                    <Text size="xs" className="text-gray-500 mt-1">
                      Feedback: {activity.feedback}
                    </Text>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right">
              <Button variant="secondary" size="sm">View All Activity</Button>
            </div>
          </Card>
        </div>
        
        {/* Bottom section - Lower priority in F-pattern */}
        <div className="grid grid-cols-1">
          <Card title="Quick Actions">
            <div className="p-4 flex flex-wrap gap-4">
              <Button>Review Pending Requests</Button>
              <Button variant="secondary">Generate Reports</Button>
              <Button variant="secondary">Update Department Requirements</Button>
              <Button variant="secondary">View Student Database</Button>
            </div>
          </Card>
        </div>
      </div>
    </StaffTemplate>
  )
}