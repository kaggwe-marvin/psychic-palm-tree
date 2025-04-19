import AdminLayout from "../../components/layout/AdminLayout"



export default function Dashboard({ user }: { user?: any }) {
  
  return (
    <AdminLayout title="Dashboard" user={user}>
    <div>
      <div className="grid grid-cols-1 gap-4 p-4 xl:grid-cols-3">
        {/* Key Statistics Cards */}
        <div className="col-span-1 xl:col-span-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Active Clearance Processes</h3>
              <p className="text-2xl font-bold">128</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Completion Rate</h3>
              <p className="text-2xl font-bold">86%</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Pending Approvals</h3>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <h3 className="text-sm text-gray-500">Requests (24h)</h3>
              <p className="text-2xl font-bold">1,042</p>
            </div>
          </div>
        </div>

        {/* Status Overview */}
        <div className="xl:col-span-2">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Clearance Status Overview</h2>
              <svg className="w-6 h-6 text-gray-500" />
            </div>
            <div className="h-48 bg-gray-100 rounded-2xl" />
          </div>
        </div>

        <div>
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Bottlenecks & Comparison</h2>
            <div className="h-48 bg-gray-100 rounded-2xl" />
          </div>
        </div>

        {/* Department Performance */}
        <div className="xl:col-span-3">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Department Performance</h2>
            <div className="h-48 bg-gray-100 rounded-2xl" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="xl:col-span-2">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
            <ul className="space-y-2 text-sm">
              <li>✔️ John Doe's clearance approved - Registrar</li>
              <li>❌ Jane Smith's clearance rejected - Library</li>
              <li>🔔 New system update deployed</li>
              <li>👤 Admin login - IT Department</li>
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="p-4 space-y-2">
            <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
            <button className="w-full">Approve Pending Requests</button>
            <button className="w-full">Generate Reports</button>
            <button className="w-full">Create Announcement</button>
            <button className="w-full">Manage Users</button>
          </div>
        </div>

        {/* Calendar View */}
        <div className="xl:col-span-3">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Calendar</h2>
            <div />
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
