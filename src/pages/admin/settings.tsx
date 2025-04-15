import AdminLayout from "../../components/layout/AdminLayout";

export default function Settings() {
  return (
    <AdminLayout title="System Settings">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">System Settings</h1>

        {/* General Settings */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">System Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter system name"
                defaultValue="Clearance Management System"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Default Language</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="English"
              >
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>

        {/* User Management Settings */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">User Management Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password Policy</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                rows={3}
                placeholder="Define password policy"
                defaultValue="Minimum 8 characters, at least one uppercase letter, one number, and one special character."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Lockout Threshold</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter number of failed login attempts"
                defaultValue={5}
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
              <input
                type="checkbox"
                className="mt-1"
                defaultChecked
              />{" "}
              Enable email notifications
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">SMS Notifications</label>
              <input
                type="checkbox"
                className="mt-1"
              />{" "}
              Enable SMS notifications
            </div>
          </div>
        </div>

        {/* Save Settings */}
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-2 rounded">Save Changes</button>
        </div>
      </div>
    </AdminLayout>
  );
}