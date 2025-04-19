import AdminLayout from "../../components/layout/AdminLayout";

export default function Requirements({ user }: { user?: any }) {
  return (
    <AdminLayout title="Requirements Management" user={user}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Requirements Management</h1>

        {/* Requirements Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Total Requirements</h3>
            <p className="text-2xl font-bold">20</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Pending Submissions</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Approved Requirements</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Rejected Requirements</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Requirements Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Requirements List</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Requirement Name</th>
                <th className="py-2 px-4">Department</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Library Clearance</td>
                <td className="py-2 px-4">Library</td>
                <td className="py-2 px-4 text-green-600">Approved</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Finance Clearance</td>
                <td className="py-2 px-4">Finance</td>
                <td className="py-2 px-4 text-yellow-600">Pending</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button> |{" "}
                  <button className="text-red-500">Remove</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Registrar Approval</td>
                <td className="py-2 px-4">Registrar</td>
                <td className="py-2 px-4 text-red-600">Rejected</td>
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
            <button className="w-full bg-blue-500 text-white py-2 rounded">Add New Requirement</button>
            <button className="w-full bg-green-500 text-white py-2 rounded">Approve All Pending</button>
            <button className="w-full bg-red-500 text-white py-2 rounded">Reject All Pending</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}