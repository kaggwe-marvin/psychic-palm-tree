import StaffLayout from "../../components/layout/StaffLayout";

export default function Dashboard({ user }: { user?: any }) {
  return (
    <StaffLayout title="Dashboard" user={user}>
      {/* Dashboard Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Staff Dashboard</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Pending Approvals</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Completed Clearances</h3>
            <p className="text-2xl font-bold">86%</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Notifications</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-sm text-gray-500">Students Assigned</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              <span className="font-bold">John Doe</span> submitted clearance requirements for Finance.
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-bold">Jane Smith</span> was approved for Library clearance.
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-bold">Alice Johnson</span> received a rejection for Registrar clearance.
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded">View Pending Approvals</button>
            <button className="w-full bg-green-500 text-white py-2 rounded">Approve All Pending</button>
            <button className="w-full bg-red-500 text-white py-2 rounded">Reject All Pending</button>
          </div>
        </div>
      </div>
    </StaffLayout>
  );
}