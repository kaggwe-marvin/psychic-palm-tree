import { FC } from 'hono/jsx';
import { Button } from '../atoms/Button';
import { Modal } from '../molecules/Modal';
import { TextInput } from '../atoms/TextInput';
import { Department, DepartmentFormData } from '../../../types/department';
import Badge from '../atoms/Badge';

type DepartmentManagementTableProps = {
  departments: Department[];
};

export const DepartmentManagementTable: FC<DepartmentManagementTableProps> = ({
  departments,
}) => {
  // Mock data for the UI demonstration
  const showAddModal = false;
  const showEditModal = false;
  const showDeleteModal = false;
  const isSubmitting = false;
  const formError = null;
  
  // Sample department for demonstration purposes
  const currentDepartment = departments.length > 0 ? departments[0] : null;
  
  // Mock form data
  const formData = {
    name: currentDepartment?.name || '',
    code: currentDepartment?.code || '',
    description: currentDepartment?.description || '',
    headOfDepartment: currentDepartment?.headOfDepartment || '',
    email: currentDepartment?.email || '',
    phone: currentDepartment?.phone || '',
    location: currentDepartment?.location || '',
    active: currentDepartment?.active || true
  };

  // Mock functions that just log actions
  const handleOpenAddModal = () => {
    console.log('Mock: Open add modal');
  };

  const handleOpenEditModal = (department: Department) => {
    console.log('Mock: Open edit modal', department);
  };

  const handleOpenDeleteModal = (department: Department) => {
    console.log('Mock: Open delete modal', department);
  };

  const handleInputChange = (field: keyof DepartmentFormData, value: string | boolean) => {
    console.log(`Mock: Input change - ${field}:`, value);
  };

  const handleAddSubmit = async (e: Event) => {
    e.preventDefault();
    console.log('Mock: Add submit', formData);
  };

  const handleEditSubmit = async (e: Event) => {
    e.preventDefault();
    console.log('Mock: Edit submit', formData);
  };

  const handleDelete = async () => {
    console.log('Mock: Delete department', currentDepartment);
  };

  const handleToggleStatus = async (id: string, active: boolean) => {
    console.log('Mock: Toggle status', id, active);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  // Department form component to avoid repetition
  const DepartmentForm = ({ isAdd = true, onSubmit }: { isAdd?: boolean, onSubmit: (e: Event) => Promise<void> }) => (
    <form className="space-y-4" onSubmit={onSubmit}>
      {formError && (
        <div className="p-3 bg-danger/10 text-danger rounded-md text-sm">
          {formError}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="Department Name"
          name="name"
          placeholder="e.g., Computer Science"
          required
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
        />
        
        <TextInput
          label="Department Code"
          name="code"
          placeholder="e.g., CS"
          required
          value={formData.code}
          onChange={(value) => handleInputChange('code', value)}
        />
        
        <TextInput
          label="Description"
          name="description"
          placeholder="Brief description of the department"
          value={formData.description}
          onChange={(value) => handleInputChange('description', value)}
        />
        
        <TextInput
          label="Head of Department"
          name="headOfDepartment"
          placeholder="Full name"
          value={formData.headOfDepartment}
          onChange={(value) => handleInputChange('headOfDepartment', value)}
        />
        
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="Department email"
          value={formData.email}
          onChange={(value) => handleInputChange('email', value)}
        />
        
        <TextInput
          label="Phone"
          name="phone"
          placeholder="Contact number"
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
        />
        
        <TextInput
          label="Location"
          name="location"
          placeholder="Building and room number"
          value={formData.location}
          onChange={(value) => handleInputChange('location', value)}
        />
        
        <div className="flex items-center space-x-2 h-full">
          <input
            type="checkbox"
            id="active"
            checked={formData.active}
            
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="active" className="text-gray-700">Active</label>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 pt-4 border-t">
        <Button
          variant="outline"
          onClick={() => console.log('Mock: Close modal')}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isAdd ? 'Add Department' : 'Update Department'}
        </Button>
      </div>
    </form>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          {departments.length} departments found
        </div>
        <Button >
          Add Department
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Head
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {departments.map((department) => (
              <tr key={department.id} className={!department.active ? 'bg-gray-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{department.name}</div>
                  {department.description && (
                    <div className="text-sm text-gray-500 truncate max-w-xs">{department.description}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {department.code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {department.headOfDepartment || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {department.email && <div>{department.email}</div>}
                  {department.phone && <div>{department.phone}</div>}
                  {department.location && <div className="text-xs text-gray-400">{department.location}</div>}
                  {!department.email && !department.phone && !department.location && '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={department.active ? 'success' : 'warning'}
                    text={department.active ? 'Active' : 'Inactive'}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(department.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleOpenEditModal(department)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleToggleStatus(department.id, !department.active)}
                    className="text-warning hover:text-warning/80 transition-colors"
                  >
                    {department.active ? 'Deactivate' : 'Activate'}
                  </button>
                  <button 
                    onClick={() => handleOpenDeleteModal(department)}
                    className="text-danger hover:text-danger/80 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {departments.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                  No departments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* All modals are disabled in this version - just showing the UI structure */}
    </div>
  );
};
