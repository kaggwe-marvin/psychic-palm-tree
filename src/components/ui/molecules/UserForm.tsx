import { FC } from 'hono/jsx';
import { Button } from '../atoms/Button';
import { SelectUser } from '../../../db/schema';

interface UserFormProps {
  mode: 'create' | 'edit';
  user?: SelectUser;
  onSubmit?: string;
  formId?: string;
}

const UserForm: FC<UserFormProps> = ({ mode, user, onSubmit }) => {
  const isCreate = mode === 'create';
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {isCreate ? 'Add New User' : 'Edit User'}
          </h3>
          <button 
            className="text-gray-400 hover:text-gray-500"
            onclick="this.closest('div.fixed').remove()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form 
          id={formId || "user-form"}
          hx-encoding="multipart/form-data"
          hx-swap="outerHTML"
          hx-target="#users-content"
          hx-{isCreate ? 'post' : 'put'}={isCreate ? "/api/users" : `/api/users/${user?.id}`}
          hx-indicator="#form-indicator"
          {...(onSubmit ? { '_': `on submit ${onSubmit}` } : {})}
        >
          <div id="form-indicator" className="htmx-indicator flex justify-center my-2">
            <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <span className="ml-2">Processing...</span>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={user?.email || ''}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {isCreate && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required={isCreate}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={user?.fullName || ''}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                name="role"
                value={user?.role || 'student'}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={user?.department || ''}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="active"
                name="active"
                value="true"
                checked={user?.active !== false}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="active" className="ml-2 block text-sm text-gray-900">Active</label>
            </div>
          </div>
          
          <div className="mt-5 flex justify-end space-x-3">
            <Button 
              type="button" 
              variant="outline"
              onclick="this.closest('div.fixed').remove()"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {isCreate ? 'Add User' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;