import { FC } from 'hono/jsx'
import { SelectUser } from '../../db/schema'
import { Button } from '../../components/ui/atoms/Button'
import { UserManagementTable } from '../../components/organisms/admin/UserManagementTable'
import AdminTemplate from '../../components/ui/templates/AdminTemplate'
import { Card } from '../../components/ui/molecules/Card'

interface UsersPageProps {
  users: SelectUser[]
  isLoading?: boolean
  error?: string | null
  partial?: boolean // For HTMX partial rendering
}

const Users: FC<UsersPageProps> = ({ users, isLoading = false, error = null, partial = false }) => {
  // Loading and error states are handled separately
  const loadingIndicator = (
    <div id="users-loading" className="p-8 text-center htmx-indicator">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p className="mt-2 text-gray-500">Loading users...</p>
    </div>
  );

  const errorDisplay = error ? (
    <div className="p-8 text-center">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline ml-2">{error}</span>
      </div>
      <Button 
        hx-get="/api/users"
        hx-target="#users-content"
        hx-swap="innerHTML"
      >
        Try Again
      </Button>
    </div>
  ) : null;

  // Main content with table
  const content = error ? errorDisplay : (
    <UserManagementTable 
      users={users}
      onAddUser={(userData) => console.log('Add user:', userData)}
      onUpdateUser={(id, userData) => console.log('Update user:', id, userData)}
      onDeleteUser={(id) => console.log('Delete user:', id)}
      onToggleUserStatus={(id, active) => console.log('Toggle status:', id, active)}
    />
  );

  // Container with loading indicator
  const inner = (
    <div className="relative">
      {loadingIndicator}
      <div id="users-content">
        {content}
      </div>
    </div>
  )

  if (partial) return inner

  return (
    <AdminTemplate title="User Management" activeSection="users">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <div id="filter-buttons" className="flex space-x-2">
            <Button 
              variant="outline" 
              hx-get="/api/users"
              hx-target="#users-content"
              hx-swap="innerHTML"
              hx-indicator="#users-loading"
              className="bg-gray-100"
              hx-on:click="
                document.querySelectorAll('#filter-buttons button').forEach(btn => 
                  btn.classList.remove('bg-gray-100')
                );
                this.classList.add('bg-gray-100')
              "
            >
              All
            </Button>
            <Button 
              variant="outline" 
              hx-get="/api/users?role=admin"
              hx-target="#users-content"
              hx-swap="innerHTML"
              hx-indicator="#users-loading"
              hx-on:click="
                document.querySelectorAll('#filter-buttons button').forEach(btn => 
                  btn.classList.remove('bg-gray-100')
                );
                this.classList.add('bg-gray-100')
              "
            >
              Admins
            </Button>
            <Button 
              variant="outline" 
              hx-get="/api/users?role=staff"
              hx-target="#users-content"
              hx-swap="innerHTML"
              hx-indicator="#users-loading"
              hx-on:click="
                document.querySelectorAll('#filter-buttons button').forEach(btn => 
                  btn.classList.remove('bg-gray-100')
                );
                this.classList.add('bg-gray-100')
              "
            >
              Staff
            </Button>
            <Button 
              variant="outline" 
              hx-get="/api/users?role=student"
              hx-target="#users-content"
              hx-swap="innerHTML"
              hx-indicator="#users-loading"
              hx-on:click="
                document.querySelectorAll('#filter-buttons button').forEach(btn => 
                  btn.classList.remove('bg-gray-100')
                );
                this.classList.add('bg-gray-100')
              "
            >
              Students
            </Button>
          </div>
        </div>

        <Card title="Users" subtitle={`${users.length} users in the system`}>
          {inner}
        </Card>
        
        {/* Modal container for user forms */}
        <div id="user-form-modal"></div>
      </div>
    </AdminTemplate>
  )
}

export default Users
