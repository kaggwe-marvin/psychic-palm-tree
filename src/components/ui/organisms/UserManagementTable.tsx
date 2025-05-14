import { FC } from 'hono/jsx';
import { useState } from 'hono/jsx';
import { Button } from '../atoms/Button';
import { TextInput } from '../atoms/TextInput';
import { Avatar } from '../atoms/Avatar';
import { User, UserRole, UserFormData } from '../../../types/user';
import { Modal } from '../molecules/Modal';
import Badge from '../atoms/Badge';

interface UserManagementTableProps {
  users: User[];
  onAddUser?: (userData: UserFormData) => Promise<void>;
  onUpdateUser?: (id: string, userData: UserFormData) => Promise<void>;
  onDeleteUser?: (id: string) => Promise<void>;
  onToggleUserStatus?: (id: string, active: boolean) => Promise<void>;
}

export const UserManagementTable: FC<UserManagementTableProps> = ({
  users = [],
  onAddUser,
  onUpdateUser,
  onDeleteUser,
  onToggleUserStatus
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    role: 'staff',
    department: '',
    position: '',
    phone: '',
    active: true
  });
  
  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (field: keyof UserFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      role: 'staff',
      department: '',
      position: '',
      phone: '',
      active: true
    });
    setEditingUser(null);
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setFormData({
      email: user.email,
      name: user.name,
      role: user.role as UserRole,
      department: user.department || '',
      position: user.position || '',
      phone: user.phone || '',
      active: user.active,
      password: '',
      confirmPassword: ''
    });
    setShowAddModal(true);
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.name || !formData.role) {
      return; // Form validation should handle this
    }
    
    // Password validation for new users
    if (!editingUser && formData.password !== formData.confirmPassword) {
      return; // Form validation should handle this
    }
    
    setIsSubmitting(true);
    
    try {
      if (editingUser) {
        await onUpdateUser?.(editingUser.id, formData);
      } else {
        await onAddUser?.(formData);
      }
      
      setShowAddModal(false);
      resetForm();
    } catch (error) {
      console.error('Error saving user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteConfirmation = async () => {
    if (!confirmDelete) return;
    
    try {
      await onDeleteUser?.(confirmDelete);
      setConfirmDelete(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      await onToggleUserStatus?.(id, !currentStatus);
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'danger';
      case 'staff': return 'success';
      case 'student': return 'primary';
      default: return 'warning';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <TextInput
            label=""
            name="search"
            placeholder="Search users..."
            value={searchTerm}
            onChange={setSearchTerm}
            className="mb-0"
          />
        </div>
        <Button 
          variant="primary" 
          onClick={() => {
            resetForm();
            setShowAddModal(true);
          }}
        >
          Add New User
        </Button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <tr key={user.id} className={!user.active ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar src={user.profileImage} alt={user.name} size="sm" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        {user.phone && <div className="text-xs text-gray-400">{user.phone}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getRoleBadgeColor(user.role)} text={user.role} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.department || '-'}
                    {user.position && <div className="text-xs text-gray-400">{user.position}</div>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={user.active ? 'success' : 'warning'}
                      text={user.active ? 'Active' : 'Inactive'}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline" onClick={() => openEditModal(user)}>
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant={user.active ? 'warning' : 'success'} 
                        onClick={() => handleToggleStatus(user.id, user.active)}
                      >
                        {user.active ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="danger" 
                        onClick={() => setConfirmDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  {users.length === 0 ? 'No users available' : 'No users match your search'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit User Modal */}
      {showAddModal && (
        <Modal
          title={editingUser ? 'Edit User' : 'Add New User'}
          isOpen={showAddModal}
          onClose={() => {
            setShowAddModal(false);
            resetForm();
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Full Name"
                name="name"
                placeholder="Enter full name"
                required
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
              />
              <TextInput
                label="Email"
                name="email"
                placeholder="Enter email address"
                type="email"
                required
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
              />
              
              <div className="form-control w-full">
                <label className="form-label">Role</label>
                <select
                  className="select select-bordered w-full"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.currentTarget.value as UserRole)}
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="student">Student</option>
                </select>
              </div>

              <TextInput
                label="Department"
                name="department"
                placeholder="Enter department"
                value={formData.department}
                onChange={(value) => handleInputChange('department', value)}
              />

              <TextInput
                label="Position"
                name="position"
                placeholder="Enter position/title"
                value={formData.position}
                onChange={(value) => handleInputChange('position', value)}
              />

              <TextInput
                label="Phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
              />

              {!editingUser && (
                <>
                  <TextInput
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    required={!editingUser}
                    value={formData.password || ''}
                    onChange={(value) => handleInputChange('password', value)}
                  />
                  <TextInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    type="password"
                    required={!editingUser}
                    value={formData.confirmPassword || ''}
                    onChange={(value) => handleInputChange('confirmPassword', value)}
                  />
                </>
              )}
              
              {editingUser && (
                <div className="col-span-2">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">User is active</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-success"
                        checked={formData.active}
                        onChange={(e) => handleInputChange('active', e.currentTarget.checked)}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : editingUser ? 'Update User' : 'Add User'}
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <Modal
          title="Confirm Deletion"
          isOpen={!!confirmDelete}
          onClose={() => setConfirmDelete(null)}
        >
          <div className="p-4">
            <p className="mb-4">Are you sure you want to delete this user? This action cannot be undone.</p>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setConfirmDelete(null)}>Cancel</Button>
              <Button variant="danger" onClick={handleDeleteConfirmation}>Delete User</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};