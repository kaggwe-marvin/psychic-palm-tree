import AdminLayout from "../../components/layout/AdminLayout";

export default function Logs() {
  return (
    <AdminLayout title="System Logs">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">System Logs</h1>

        {/* Logs Overview */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Logs Overview</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Total Logs</h3>
              <p className="text-2xl font-bold">1,245</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Errors</h3>
              <p className="text-2xl font-bold text-red-600">45</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Warnings</h3>
              <p className="text-2xl font-bold text-yellow-600">78</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Info</h3>
              <p className="text-2xl font-bold text-blue-600">1,122</p>
            </div>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Logs</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Timestamp</th>
                <th className="py-2 px-4">Level</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">2025-04-15 14:32:10</td>
                <td className="py-2 px-4 text-red-600">Error</td>
                <td className="py-2 px-4">Database connection failed</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View Details</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">2025-04-15 13:10:45</td>
                <td className="py-2 px-4 text-yellow-600">Warning</td>
                <td className="py-2 px-4">High memory usage detected</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2025-04-15 12:05:20</td>
                <td className="py-2 px-4 text-blue-600">Info</td>
                <td className="py-2 px-4">User John Doe logged in</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded">Export Logs</button>
            <button className="w-full bg-green-500 text-white py-2 rounded">Clear All Logs</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}