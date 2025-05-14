import { FC } from 'hono/jsx';
import { useState } from 'hono/jsx';
import { Card } from '../../molecules/Card';
import { UserManagementTable } from '../../organisms/UserManagementTable';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import AdminTemplate from '../../templates/AdminTemplate';
import { useEffect } from 'hono/jsx';
import { User, UserFormData } from '../../../../types/user';

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterRole, setFilterRole] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from API
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    
    // For demonstration purposes, we'll use mock data
    // In a real application, this would be an API call
    try {
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockUsers: User[] = [
        {
          id: '1',
          email: 'admin@example.com',
          name: 'Admin User',
          role: 'admin',
          department: 'IT',
          position: 'System Administrator',
          phone: '+1234567890',
          active: true,
          lastLogin: Date.now() / 1000,
          createdAt: Date.now() / 1000 - 30 * 24 * 60 * 60 // 30 days ago
        },
        {
          id: '2',
          email: 'staff@example.com',
          name: 'Staff Member',
          role: 'staff',
          department: 'Academic Affairs',
          position: 'Clearance Officer',
          active: true,
          createdAt: Date.now() / 1000 - 25 * 24 * 60 * 60 // 25 days ago
        },
        {
          id: '3',
          email: 'student@example.com',
          name: 'John Student',
          role: 'student',
          department: 'Computer Science',
          active: true,
          createdAt: Date.now() / 1000 - 15 * 24 * 60 * 60 // 15 days ago
        },
        {
          id: '4',
          email: 'jane@example.com',
          name: 'Jane Smith',
          role: 'student',
          department: 'Engineering',
          active: false,
          createdAt: Date.now() / 1000 - 45 * 24 * 60 * 60 // 45 days ago
        }
      ];
      
      setUsers(mockUsers);
    } catch (err) {
      setError('Failed to load users. Please try again.');
      console.error('Error fetching users:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddUser = async (userData: UserFormData) => {
    try {
      // In a real app, this would be an API call
      console.log('Adding user:', userData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new user with the form data
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 15),
        email: userData.email,
        name: userData.name,
        role: userData.role,
        department: userData.department,
        position: userData.position,
        phone: userData.phone,
        active: userData.active,
        createdAt: Math.floor(Date.now() / 1000)
      };
      
      // Update state
      setUsers(prevUsers => [...prevUsers, newUser]);
      
      return true;
    } catch (err) {
      console.error('Error adding user:', err);
      throw err;
    }
  };

  const handleUpdateUser = async (id: string, userData: UserFormData) => {
    try {
      // In a real app, this would be an API call
      console.log('Updating user:', id, userData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update the user in state
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === id 
            ? { 
                ...user, 
                email: userData.email,
                name: userData.name,
                role: userData.role,
                department: userData.department,
                position: userData.position,
                phone: userData.phone,
                active: userData.active
              } 
            : user
        )
      );
      
      return true;
    } catch (err) {
      console.error('Error updating user:', err);
      throw err;
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      // In a real app, this would be an API call
      console.log('Deleting user:', id);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Remove the user from state
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      
      return true;
    } catch (err) {
      console.error('Error deleting user:', err);
      throw err;
    }
  };

  const handleToggleUserStatus = async (id: string, active: boolean) => {
    try {
      // In a real app, this would be an API call
      console.log('Toggling user status:', id, active);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update user status in state
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === id ? { ...user, active } : user
        )
      );
      
      return true;
    } catch (err) {
      console.error('Error toggling user status:', err);
      throw err;
    }
  };

  const filteredUsers = filterRole 
    ? users.filter(user => user.role === filterRole) 
    : users;

  return (
    <AdminTemplate title="User Management" activeSection="users">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => setFilterRole(null)}
              className={filterRole === null ? 'bg-gray-100' : ''}
            >
              All
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setFilterRole('admin')}
              className={filterRole === 'admin' ? 'bg-gray-100' : ''}
            >
              Admins
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setFilterRole('staff')}
              className={filterRole === 'staff' ? 'bg-gray-100' : ''}
            >
              Staff
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setFilterRole('student')}
              className={filterRole === 'student' ? 'bg-gray-100' : ''}
            >
              Students
            </Button>
          </div>
        </div>

        <Card title="Users" subtitle={`${filteredUsers.length} users in the system`}>
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
              <p className="mt-2 text-gray-500">Loading users...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <div className="text-error mb-2">⚠️ {error}</div>
              <Button onClick={fetchUsers}>Try Again</Button>
            </div>
          ) : (
            <UserManagementTable 
              users={filteredUsers}
              onAddUser={handleAddUser}
              onUpdateUser={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
              onToggleUserStatus={handleToggleUserStatus}
            />
          )}
        </Card>
      </div>
    </AdminTemplate>
  );
};

export default Users;
