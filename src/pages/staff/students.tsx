import { FC } from 'hono/jsx';
import StaffTemplate from '../../components/ui/templates/StaffTemplate';
import { Card } from '../../components/ui/molecules/Card';
import Text from '../../components/ui/atoms/Text';
import { Button } from '../../components/ui/atoms/Button';
import Badge from '../../components/ui/atoms/Badge';

// Mock data for students - would come from API in real implementation
const students = [
  {
    id: '1',
    name: 'John Doe',
    studentId: 'S12345',
    department: 'Computer Science',
    email: 'john.doe@university.edu',
    clearanceStatus: {
      overall: 'in_progress',
      progress: 50,
      departments: [
        { name: 'Library', status: 'rejected' },
        { name: 'Finance', status: 'approved' },
        { name: 'Hostel', status: 'in_progress' },
        { name: 'Department', status: 'pending' },
        { name: 'IT Services', status: 'pending' },
        { name: 'Certificate', status: 'pending' }
      ]
    },
    lastActive: '2025-05-09T15:30:00'
  },
  {
    id: '2',
    name: 'Jane Smith',
    studentId: 'S67890',
    department: 'Mathematics',
    email: 'jane.smith@university.edu',
    clearanceStatus: {
      overall: 'approved',
      progress: 100,
      departments: [
        { name: 'Library', status: 'approved' },
        { name: 'Finance', status: 'approved' },
        { name: 'Hostel', status: 'approved' },
        { name: 'Department', status: 'approved' },
        { name: 'IT Services', status: 'approved' },
        { name: 'Certificate', status: 'approved' }
      ]
    },
    lastActive: '2025-05-10T09:45:00'
  },
  {
    id: '3',
    name: 'Alice Johnson',
    studentId: 'S54321',
    department: 'Physics',
    email: 'alice.johnson@university.edu',
    clearanceStatus: {
      overall: 'in_progress',
      progress: 65,
      departments: [
        { name: 'Library', status: 'approved' },
        { name: 'Finance', status: 'approved' },
        { name: 'Hostel', status: 'in_progress' },
        { name: 'Department', status: 'approved' },
        { name: 'IT Services', status: 'pending' },
        { name: 'Certificate', status: 'pending' }
      ]
    },
    lastActive: '2025-05-08T11:20:00'
  },
  {
    id: '4',
    name: 'Robert Wilson',
    studentId: 'S98765',
    department: 'Engineering',
    email: 'robert.wilson@university.edu',
    clearanceStatus: {
      overall: 'rejected',
      progress: 30,
      departments: [
        { name: 'Library', status: 'rejected' },
        { name: 'Finance', status: 'rejected' },
        { name: 'Hostel', status: 'approved' },
        { name: 'Department', status: 'pending' },
        { name: 'IT Services', status: 'pending' },
        { name: 'Certificate', status: 'pending' }
      ]
    },
    lastActive: '2025-05-07T14:15:00'
  },
  {
    id: '5',
    name: 'Emily Davis',
    studentId: 'S24680',
    department: 'Chemistry',
    email: 'emily.davis@university.edu',
    clearanceStatus: {
      overall: 'in_progress',
      progress: 80,
      departments: [
        { name: 'Library', status: 'approved' },
        { name: 'Finance', status: 'approved' },
        { name: 'Hostel', status: 'approved' },
        { name: 'Department', status: 'approved' },
        { name: 'IT Services', status: 'in_progress' },
        { name: 'Certificate', status: 'pending' }
      ]
    },
    lastActive: '2025-05-10T10:35:00'
  }
];

type StudentsProps = {
  staffName?: string
  staffEmail?: string
  departmentName?: string
}

const Students: FC<StudentsProps> = ({
}) => {
  // In a real implementation, these would be actual handlers
  const handleViewStudent = (studentId: string) => {
    console.log(`View student ${studentId}`);
    // Would navigate to student details page
  };

  const handleApproveStudent = (studentId: string) => {
    console.log(`Approve student ${studentId}`);
    // Would open approval modal or navigate to approval page
  };

  const handleRejectStudent = (studentId: string) => {
    console.log(`Reject student ${studentId}`);
    // Would open rejection modal with reason input
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action}`);
    // Would perform bulk action on selected students
  };

  // Filter functions
  const filterStudentsByStatus = (status: string) => {
    if (status === 'all') return students;
    return students.filter(student => student.clearanceStatus.overall === status);
  };

  // Count students by status
  const totalStudents = students.length;
  const approvedStudents = students.filter(s => s.clearanceStatus.overall === 'approved').length;
  const inProgressStudents = students.filter(s => s.clearanceStatus.overall === 'in_progress').length;
  const rejectedStudents = students.filter(s => s.clearanceStatus.overall === 'rejected').length;

  return (
    <StaffTemplate 
      title="Students Management" 
      activeSection="students"
    >
      <div className="space-y-6">
        {/* Summary Statistics Card */}
        <Card title="Students Overview">
          <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Text size="sm" className="text-blue-700">Total Students</Text>
                <Text size="xl" className="font-bold">{totalStudents}</Text>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <Text size="sm" className="text-yellow-700">In Progress</Text>
                <Text size="xl" className="font-bold">{inProgressStudents}</Text>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <Text size="sm" className="text-green-700">Fully Approved</Text>
                <Text size="xl" className="font-bold">{approvedStudents}</Text>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <Text size="sm" className="text-red-700">Rejected</Text>
                <Text size="xl" className="font-bold">{rejectedStudents}</Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Filters and Search */}
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
                  <option value="computer_science">Computer Science</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="engineering">Engineering</option>
                  <option value="chemistry">Chemistry</option>
                </select>
              </div>
              <div className="w-full md:w-auto flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Clearance Status
                </label>
                <select 
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="approved">Approved</option>
                  <option value="in_progress">In Progress</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div className="w-full md:w-auto flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search by name, ID, or email"
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

        {/* Students Table */}
        <Card title="Students List" noPadding>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clearance Progress
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
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                        <div className="text-xs text-gray-500">ID: {student.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.department}</div>
                    <div className="text-xs text-gray-500">
                      Last active: {new Date(student.lastActive).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div
                        className={`h-2.5 rounded-full ${
                          student.clearanceStatus.overall === 'approved' ? 'bg-green-600' :
                          student.clearanceStatus.overall === 'rejected' ? 'bg-red-600' : 'bg-yellow-600'
                        }`}
                        style={{ width: `${student.clearanceStatus.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">{student.clearanceStatus.progress}% Complete</div>
                    <div className="flex flex-wrap mt-1 gap-1">
                      {student.clearanceStatus.departments.map((dept, idx) => (
                        <span 
                          key={idx} 
                          className={`inline-block w-3 h-3 rounded-full ${
                            dept.status === 'approved' ? 'bg-green-500' :
                            dept.status === 'rejected' ? 'bg-red-500' :
                            dept.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                          }`}
                          title={`${dept.name}: ${dept.status}`}
                        ></span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={
                        student.clearanceStatus.overall === 'approved' ? 'success' :
                        student.clearanceStatus.overall === 'rejected' ? 'danger' : 'warning'
                      }
                    >
                      {student.clearanceStatus.overall === 'in_progress' ? 'In Progress' : 
                       student.clearanceStatus.overall.charAt(0).toUpperCase() + student.clearanceStatus.overall.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewStudent(student.id)}
                      >
                        View
                      </Button>
                      
                      {student.clearanceStatus.overall !== 'approved' && (
                        <Button 
                          variant="success" 
                          size="sm"
                          onClick={() => handleApproveStudent(student.id)}
                        >
                          Approve
                        </Button>
                      )}
                      
                      {student.clearanceStatus.overall !== 'rejected' && (
                        <Button 
                          variant="danger" 
                          size="sm"
                          onClick={() => handleRejectStudent(student.id)}
                        >
                          Reject
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Bulk Actions */}
        <Card title="Bulk Actions">
          <div className="py-4">
            <Text className="mb-4">Select an action to apply to all filtered students:</Text>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button onClick={() => handleBulkAction('view_all')}>
                Export Student List
              </Button>
              <Button
                variant="success"
                onClick={() => handleBulkAction('approve_all')}
              >
                Approve All Pending
              </Button>
              <Button
                variant="danger"
                onClick={() => handleBulkAction('reject_all')}
              >
                Reject All Pending
              </Button>
            </div>
          </div>
        </Card>

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

export default Students;