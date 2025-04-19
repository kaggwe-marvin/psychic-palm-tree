import AdminLayout from "../../components/layout/AdminLayout";

export default function Users({ user }: { user?: any }) {
  return (
    <AdminLayout title="User Management" user={user}> 
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>

        {/* User Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold">1,245</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Active Users</h3>
            <p className="text-2xl font-bold">1,102</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Admins</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Pending Approvals</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">User List</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">john.doe@example.com</td>
                <td className="py-2 px-4">Admin</td>
                <td className="py-2 px-4 text-green-600">Active</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Jane Smith</td>
                <td className="py-2 px-4">jane.smith@example.com</td>
                <td className="py-2 px-4">Staff</td>
                <td className="py-2 px-4 text-yellow-600">Pending</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Alice Johnson</td>
                <td className="py-2 px-4">alice.johnson@example.com</td>
                <td className="py-2 px-4">Student</td>
                <td className="py-2 px-4 text-green-600">Active</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded">Add New User</button>
            <button className="w-full bg-green-500 text-white py-2 rounded">Approve Pending Users</button>
            <button className="w-full bg-red-500 text-white py-2 rounded">Remove Inactive Users</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}