import StaffLayout from "../../components/layout/StaffLayout";

export default function Approvals({ user }: { user?: any }) {
  return (
    <StaffLayout title="Approvals" user={user}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Approvals Management</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Pending Approvals</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Approved Requests</h3>
            <p className="text-2xl font-bold">86%</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Rejected Requests</h3>
            <p className="text-2xl font-bold">10</p>
          </div>
        </div>

        {/* Approvals Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Approval Requests</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Student Name</th>
                <th className="py-2 px-4">Request Type</th>
                <th className="py-2 px-4">Date Submitted</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">Finance Clearance</td>
                <td className="py-2 px-4">2025-04-14</td>
                <td className="py-2 px-4 text-yellow-600">Pending</td>
                <td className="py-2 px-4">
                  <button className="text-green-500">Approve</button> |{" "}
                  <button className="text-red-500">Reject</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Jane Smith</td>
                <td className="py-2 px-4">Library Clearance</td>
                <td className="py-2 px-4">2025-04-13</td>
                <td className="py-2 px-4 text-green-600">Approved</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Alice Johnson</td>
                <td className="py-2 px-4">Registrar Clearance</td>
                <td className="py-2 px-4">2025-04-12</td>
                <td className="py-2 px-4 text-red-600">Rejected</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-green-500 text-white py-2 rounded">Approve All Pending</button>
            <button className="w-full bg-red-500 text-white py-2 rounded">Reject All Pending</button>
          </div>
        </div>
      </div>
    </StaffLayout>
  );
}