import AdminLayout from "../../components/layout/AdminLayout";

export default function Roles({ user }: { user?: any }) {
  return (
    <AdminLayout title="Roles and Permissions" user={user}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Roles and Permissions</h1>

        {/* Role Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Total Roles</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Admin Roles</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Staff Roles</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Custom Roles</h3>
            <p className="text-2xl font-bold">1</p>
          </div>
        </div>

        {/* Role Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Role List</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Role Name</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Permissions</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Admin</td>
                <td className="py-2 px-4">Full access to the system</td>
                <td className="py-2 px-4">All Permissions</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Staff</td>
                <td className="py-2 px-4">Manage students and courses</td>
                <td className="py-2 px-4">Limited Permissions</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Student</td>
                <td className="py-2 px-4">Access to personal data</td>
                <td className="py-2 px-4">View Only</td>
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
            <button className="w-full bg-blue-500 text-white py-2 rounded">Add New Role</button>
            <button className="w-full bg-green-500 text-white py-2 rounded">Edit Role Permissions</button>
            <button className="w-full bg-red-500 text-white py-2 rounded">Remove Unused Roles</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}