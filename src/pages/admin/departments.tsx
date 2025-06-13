import { FC } from 'hono/jsx';
import { SelectDepartment } from '../../db/schema';
import AdminTemplate from '../../components/ui/templates/AdminTemplate';
import { Button } from '../../components/ui/atoms/Button';
const Departments: FC = () => {
  // Mock data for UI display
  const departments: SelectDepartment[] = [
    {
      id: '1',
      name: 'Computer Science',
      code: 'CS',
      description: 'Department of Computer Science and Information Technology',
      headOfDepartment: 'Dr. John Smith',
      email: 'cs@university.edu',
      phone: '+1234567890',
      location: 'Block A, Room 101',
      active: true,
      createdAt: Date.now() / 1000 - 365 * 24 * 60 * 60 // 1 year ago
    },
    {
      id: '2',
      name: 'Physics',
      code: 'PHY',
      description: 'Department of Physics and Applied Sciences',
      headOfDepartment: 'Dr. Jane Williams',
      email: 'physics@university.edu',
      phone: '+1234567891',
      location: 'Block B, Room 205',
      active: true,
      createdAt: Date.now() / 1000 - 300 * 24 * 60 * 60 // 300 days ago
    },
    {
      id: '3',
      name: 'Mathematics',
      code: 'MATH',
      description: 'Department of Mathematics and Statistics',
      headOfDepartment: 'Prof. Robert Johnson',
      email: 'math@university.edu',
      phone: '+1234567892',
      location: 'Block A, Room 305',
      active: true,
      createdAt: Date.now() / 1000 - 250 * 24 * 60 * 60 // 250 days ago
    },
    {
      id: '4',
      name: 'History',
      code: 'HIST',
      description: 'Department of Historical Studies',
      headOfDepartment: 'Dr. Mary Thompson',
      active: false,
      createdAt: Date.now() / 1000 - 400 * 24 * 60 * 60 // 400 days ago
    }
  ];
  
  // Mock handlers for UI demonstration - these don't actually modify data
  const handleAddDepartment = async (departmentData: DepartmentFormData) => {
    console.log('Mock adding department:', departmentData);
    return true;
  };

  const handleUpdateDepartment = async (id: string, departmentData: DepartmentFormData) => {
    console.log('Mock updating department:', id, departmentData);
    return true;
  };

  const handleDeleteDepartment = async (id: string) => {
    console.log('Mock deleting department:', id);
    return true;
  };

  const handleToggleDepartmentStatus = async (id: string) => {
    console.log('Mock toggling department status:', id);
    return true;
  };
  
  // For UI demonstration purposes
  const filteredDepartments = departments;

  return (
    <AdminTemplate title="Department Management" activeSection="departments">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Department Management</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="bg-gray-100">All</Button>
            <Button variant="outline">Active</Button>
            <Button variant="outline">Inactive</Button>
          </div>
        </div>
        
       
      </div>
    </AdminTemplate>
  );
};

export default Departments;
