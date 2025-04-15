import StaffLayout from "../../components/layout/StaffLayout";

export default function Profile() {
  return (
    <StaffLayout title="Profile">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Profile Management</h1>

        {/* Profile Information */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="Staff"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Password Update */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Update Password</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>

        {/* Save Changes */}
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-2 rounded">Save Changes</button>
        </div>
      </div>
    </StaffLayout>
  );
}