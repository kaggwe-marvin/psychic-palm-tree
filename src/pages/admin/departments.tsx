import AdminLayout from "../../components/layout/AdminLayout";

export default function Departments({ user }: { user?: any }) {
  return (
    <AdminLayout title="Department Management" user={user}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Department Management</h1>

        {/* Department Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Total Departments</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Active Departments</h3>
            <p className="text-2xl font-bold">10</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Pending Clearances</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Completed Clearances</h3>
            <p className="text-2xl font-bold">86%</p>
          </div>
        </div>

        {/* Department Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Department List</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Department Name</th>
                <th className="py-2 px-4">Head of Department</th>
                <th className="py-2 px-4">Active Clearances</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Computer Science</td>
                <td className="py-2 px-4">Dr. John Doe</td>
                <td className="py-2 px-4">15</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View</button> |{" "}
                  <button className="text-green-500">Approve</button> |{" "}
                  <button className="text-red-500">Reject</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Mathematics</td>
                <td className="py-2 px-4">Dr. Jane Smith</td>
                <td className="py-2 px-4">8</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View</button> |{" "}
                  <button className="text-green-500">Approve</button> |{" "}
                  <button className="text-red-500">Reject</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Physics</td>
                <td className="py-2 px-4">Dr. Alice Johnson</td>
                <td className="py-2 px-4">12</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View</button> |{" "}
                  <button className="text-green-500">Approve</button> |{" "}
                  <button className="text-red-500">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded">Add New Department</button>
            <button className="w-full bg-green-500 text-white py-2 rounded">Approve All Pending Clearances</button>
            <button className="w-full bg-red-500 text-white py-2 rounded">Reject All Pending Clearances</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}