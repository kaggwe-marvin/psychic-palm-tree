import { FC } from 'hono/jsx';
import { formatDate } from '../../../utils/formatters';
import { SelectUser } from '../../../db/schema';
import { Button } from '../../ui/atoms/Button';
import DeleteUserButton from '../../ui/atoms/DeleteUserButton';

interface UserManagementTableProps {
  users: SelectUser[];
  onAddUser: (userData: Omit<SelectUser, 'id' | 'createdAt'>) => void;
  onUpdateUser: (id: string, userData: Partial<SelectUser>) => void;
  onDeleteUser: (id: string) => void;
  onToggleUserStatus: (id: string, active: boolean) => void;
  partial?: boolean; // For HTMX partial rendering
}

export const UserManagementTable: FC<UserManagementTableProps> = ({
  users,
  onAddUser,
  onUpdateUser,
  onDeleteUser,
  onToggleUserStatus,
  partial = true
}) => {
  const tableContent = (
    <div className="w-full">
      {/* Add User Button - only show in full mode */}
      {!partial && (
        <div className="mb-4 flex justify-end">
          <Button
            variant="primary"
            hx-get="/api/users/new-form"
            hx-target="#user-form-modal"
            hx-swap="innerHTML"
            hx-trigger="click"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add User
            </span>
          </Button>
        </div>
      )}

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name / Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No users found. Add a new user to get started.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 font-medium">{user.fullName ? user.fullName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.fullName || 'Not set'}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'admin' 
                        ? 'bg-purple-100 text-purple-800' 
                        : user.role === 'staff' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.department || 'Not assigned'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`h-4 w-4 rounded-full mr-2 ${
                          user.active ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      ></div>
                      <span className="text-sm text-gray-500">
                        {user.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-900"
                        hx-get={`/api/users/${user.id}/edit-form`}
                        hx-target="#user-form-modal"
                        hx-swap="innerHTML"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        className={user.active ? "text-red-600 hover:text-red-900" : "text-green-600 hover:text-green-900"}
                        hx-post={`/api/users/${user.id}/toggle-status`}
                        hx-target="#users-content"
                        hx-swap="innerHTML"
                        hx-confirm={user.active ? `Deactivate ${user.fullName || user.email}?` : `Activate ${user.fullName || user.email}?`}
                      >
                        {user.active ? 'Deactivate' : 'Activate'}
                      </Button>
                      <DeleteUserButton userId={user.id} className="text-red-600 hover:text-red-800 hover:underline"/>
                        
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Container for User Forms */}
      <div id="user-form-modal"></div>
    </div>
  );
  
  // If this is a partial render, we want to return the table content directly
  // This is important for HTMX to replace the table content correctly
  if (partial) {
    return tableContent;
  }
  
  // Otherwise, return the complete component with the table content
  return tableContent;
};