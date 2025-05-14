import { FC } from 'hono/jsx'
import AdminTemplate from '../../templates/AdminTemplate'
import { Card } from '../../molecules/Card'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { Alert } from '../../molecules/Alert'
import { useUser } from '../../../../contexts/UserContext'

// Mock data - would come from API in real app
const clearanceStats = {
  totalStudents: 450,
  inProgress: 287,
  completed: 143,
  pending: 20,
}

const departmentStats = [
  { name: 'Library', total: 450, approved: 350, pending: 80, rejected: 20 },
  { name: 'Finance', total: 450, approved: 310, pending: 120, rejected: 20 },
  { name: 'Hostel', total: 450, approved: 280, pending: 150, rejected: 20 },
  { name: 'Department', total: 450, approved: 330, pending: 100, rejected: 20 }
]

const recentSubmissions = [
  {
    id: '1',
    studentName: 'John Smith',
    studentId: 'ST12345',
    department: 'Library',
    status: 'pending',
    submittedAt: '2025-05-12T09:00:00'
  },
  {
    id: '2',
    studentName: 'Sarah Johnson',
    studentId: 'ST23456',
    department: 'Finance',
    status: 'rejected',
    submittedAt: '2025-05-12T08:30:00'
  },
  {
    id: '3',
    studentName: 'Michael Brown',
    studentId: 'ST34567',
    department: 'Hostel',
    status: 'approved',
    submittedAt: '2025-05-11T16:45:00'
  },
  {
    id: '4',
    studentName: 'Emily Davis',
    studentId: 'ST45678',
    department: 'Department',
    status: 'pending',
    submittedAt: '2025-05-11T14:20:00'
  },
  {
    id: '5',
    studentName: 'David Wilson',
    studentId: 'ST56789',
    department: 'Library',
    status: 'approved',
    submittedAt: '2025-05-11T11:10:00'
  }
]

type AdminDashboardProps = {
  // Props will come from context
}

export const AdminDashboard: FC<AdminDashboardProps> = () => {
  const user = useUser();
  const adminName = user.name || '';
  
  // These would be real handlers in implementation
  const handleViewAllStudents = () => {
    console.log('Navigate to all students')
  }
  
  const handleViewReports = () => {
    console.log('Navigate to reports')
  }
  
  const handleViewSubmission = (submissionId: string) => {
    console.log('View submission:', submissionId)
  }
  
  // Calculate completion percentage
  const completionPercentage = Math.round((clearanceStats.completed / clearanceStats.totalStudents) * 100);
  
  return (
    <AdminTemplate
      title="Dashboard"
      activeSection="dashboard"
    >
      {/* F-Pattern Content Organization */}
      <div className="space-y-6">
        {/* Top section - First horizontal scan (most important) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Stat Cards */}
          <Card className="bg-blue-50">
            <div className="p-4">
              <Text size="sm" className="text-blue-700">Total Students</Text>
              <Text size="xl" className="font-bold">{clearanceStats.totalStudents}</Text>
            </div>
          </Card>
          
          <Card className="bg-green-50">
            <div className="p-4">
              <Text size="sm" className="text-green-700">Completed</Text>
              <Text size="xl" className="font-bold">{clearanceStats.completed}</Text>
            </div>
          </Card>
          
          <Card className="bg-yellow-50">
            <div className="p-4">
              <Text size="sm" className="text-yellow-700">In Progress</Text>
              <Text size="xl" className="font-bold">{clearanceStats.inProgress}</Text>
            </div>
          </Card>
          
          <Card className="bg-red-50">
            <div className="p-4">
              <Text size="sm" className="text-red-700">Pending Review</Text>
              <Text size="xl" className="font-bold">{clearanceStats.pending}</Text>
            </div>
          </Card>
        </div>
        
        {/* Middle section - Second horizontal scan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section (highest priority in F-pattern) */}
          <div className="lg:col-span-2">
            <Card title="Clearance Process Overview" className="h-full">
              <div className="py-4">
                <Text size="lg" className="font-medium mb-2">Welcome, {adminName}</Text>
                <Text className="mb-4">Overall clearance completion: {completionPercentage}%</Text>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
                
                <Alert 
                  type={clearanceStats.pending > 10 ? 'warning' : 'info'}
                  className="mt-4"
                >
                  {clearanceStats.pending > 10 
                    ? `Action required: ${clearanceStats.pending} submissions awaiting review`
                    : 'All systems running smoothly'}
                </Alert>
              </div>
            </Card>
          </div>
          
          {/* Right section of first row (secondary priority) */}
          <div className="lg:col-span-1">
            <Card title="Important Dates" className="h-full">
              <ul className="space-y-2 py-2">
                <li className="flex justify-between">
                  <span>Final submission deadline</span>
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
        
        {/* Recent Submissions Table */}
        <Card title="Recent Submissions">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>ID</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentSubmissions.map(submission => (
                  <tr key={submission.id}>
                    <td>{submission.studentName}</td>
                    <td>{submission.studentId}</td>
                    <td>{submission.department}</td>
                    <td>
                      <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-white ${
                        submission.status === 'approved' ? 'bg-green-500' : 
                        submission.status === 'rejected' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}>
                        {submission.status}
                      </span>
                    </td>
                    <td>{new Date(submission.submittedAt).toLocaleDateString()}</td>
                    <td>
                      <Button 
                        size="sm" 
                        onClick={() => handleViewSubmission(submission.id)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        {/* Department Status Section */}
        <Card title="Department Status">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Approved</th>
                  <th>Pending</th>
                  <th>Rejected</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {departmentStats.map(dept => (
                  <tr key={dept.name}>
                    <td>{dept.name}</td>
                    <td>{dept.approved}</td>
                    <td>{dept.pending}</td>
                    <td>{dept.rejected}</td>
                    <td className="w-1/4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.round((dept.approved / dept.total) * 100)}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        {/* Bottom section - Lower priority in F-pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card title="System Notifications">
              <div className="py-2">
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded border-l-4 border-blue-500">
                    <Text size="sm" className="text-blue-700">System: Daily backup completed successfully</Text>
                    <Text size="xs" className="text-gray-500">Today, 02:00 AM</Text>
                  </div>
                  <div className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <Text size="sm" className="text-yellow-700">Finance department: 20 new submissions awaiting review</Text>
                    <Text size="xs" className="text-gray-500">Yesterday, 4:35 PM</Text>
                  </div>
                  <div className="p-2 bg-red-50 rounded border-l-4 border-red-500">
                    <Text size="sm" className="text-red-700">Alert: Certificate generation job failed</Text>
                    <Text size="xs" className="text-gray-500">Yesterday, 9:12 AM</Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card title="Quick Actions" className="h-full">
              <div className="flex flex-col space-y-3 py-2">                <Button onClick={handleViewAllStudents}>
                  View All Students
                </Button>
                <Button variant="outline" onClick={handleViewReports}>
                  Generate Reports
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AdminTemplate>
  )
}

export default AdminDashboard