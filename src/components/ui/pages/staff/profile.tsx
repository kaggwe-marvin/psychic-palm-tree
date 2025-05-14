import { FC } from 'hono/jsx';
import StaffTemplate from "../../templates/StaffTemplate";
import { Card } from "../../molecules/Card";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { Alert } from "../../molecules/Alert";
import Badge from '../../atoms/Badge';

// Mock data for staff profile - would come from API in real implementation
const staffProfile = {
  personal: {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    phone: '+1 (555) 987-6543',
    employeeId: 'E78901',
    role: 'Library Staff',
    department: 'Library',
    joinDate: '2022-03-15'
  },
  activities: {
    pendingRequests: 8,
    approvedThisWeek: 14,
    rejectedThisWeek: 3,
    averageResponseTime: '8 hours'
  },
  preferences: {
    emailNotifications: true,
    smsNotifications: false,
    displayPendingCount: true,
    defaultViewMode: 'detailed'
  },
  securitySettings: {
    lastPasswordChange: '2025-02-15',
    twoFactorEnabled: true,
    loginHistory: [
      { date: '2025-05-12T08:30:00', ipAddress: '192.168.1.45', device: 'Chrome on Windows' },
      { date: '2025-05-11T14:15:00', ipAddress: '192.168.1.45', device: 'Chrome on Windows' },
      { date: '2025-05-10T09:45:00', ipAddress: '192.168.1.120', device: 'Safari on iOS' }
    ]
  }
};

type ProfileProps = {
  staffName?: string
  staffEmail?: string
}

const Profile: FC<ProfileProps> = ({
}) => {
  // These would be real handlers in implementation
  const handleUpdateProfile = () => {
    console.log('Update profile');
    // Would save profile changes
  };
  
  const handleChangePassword = () => {
    console.log('Change password');
    // Would open change password modal
  };
  
  const handleToggleTwoFactor = () => {
    console.log('Toggle two-factor authentication');
    // Would enable/disable 2FA
  };
  
  const handleUpdatePreferences = () => {
    console.log('Update preferences');
    // Would save preference changes
  };

  return (
    <StaffTemplate 
      title="Staff Profile" 
      activeSection="profile"
    >
      <div className="space-y-6">
        {/* Personal Information Card */}
        <Card title="Personal Information">
          <div className="py-4">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {staffProfile.personal.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="ml-6">
                <Text size="xl" className="font-semibold">{staffProfile.personal.name}</Text>
                <div className="mt-1 flex items-center">
                  <Badge variant="info">{staffProfile.personal.role}</Badge>
                  <Text size="sm" className="text-gray-500 ml-2">{staffProfile.personal.department} Department</Text>
                </div>
                <Text size="sm" className="text-gray-500 mt-2">{staffProfile.personal.email}</Text>
              </div>
              <div className="ml-auto">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={handleUpdateProfile}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <Text size="sm" className="font-medium text-gray-500">Employee ID</Text>
                  <Text>{staffProfile.personal.employeeId}</Text>
                </div>
                <div>
                  <Text size="sm" className="font-medium text-gray-500">Phone Number</Text>
                  <Text>{staffProfile.personal.phone}</Text>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Text size="sm" className="font-medium text-gray-500">Department</Text>
                  <Text>{staffProfile.personal.department}</Text>
                </div>
                <div>
                  <Text size="sm" className="font-medium text-gray-500">Joined Date</Text>
                  <Text>{new Date(staffProfile.personal.joinDate).toLocaleDateString()}</Text>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Activity Summary Card */}
        <Card title="Activity Summary">
          <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-yellow-50 p-3 rounded-lg">
                <Text size="sm" className="text-yellow-700">Pending Requests</Text>
                <Text size="xl" className="font-bold">{staffProfile.activities.pendingRequests}</Text>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <Text size="sm" className="text-green-700">Approved This Week</Text>
                <Text size="xl" className="font-bold">{staffProfile.activities.approvedThisWeek}</Text>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <Text size="sm" className="text-red-700">Rejected This Week</Text>
                <Text size="xl" className="font-bold">{staffProfile.activities.rejectedThisWeek}</Text>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <Text size="sm" className="text-blue-700">Avg. Response Time</Text>
                <Text size="xl" className="font-bold">{staffProfile.activities.averageResponseTime}</Text>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Button as="a" href="/staff/approvals" variant="outline">
                View All Pending Requests
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Password & Security Card */}
        <Card title="Password & Security">
          <div className="py-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <Text className="font-medium">Password</Text>
                <Text size="sm" className="text-gray-500">
                  Last changed: {new Date(staffProfile.securitySettings.lastPasswordChange).toLocaleDateString()}
                </Text>
              </div>
              <Button 
                variant="outline" 
                onClick={handleChangePassword}
              >
                Change Password
              </Button>
            </div>
            
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <div>
                <Text className="font-medium">Two-Factor Authentication</Text>
                <Text size="sm" className="text-gray-500">
                  {staffProfile.securitySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </Text>
              </div>
              <Button 
                variant={staffProfile.securitySettings.twoFactorEnabled ? "danger" : "success"} 
                onClick={handleToggleTwoFactor}
              >
                {staffProfile.securitySettings.twoFactorEnabled ? 'Disable' : 'Enable'}
              </Button>
            </div>
            
            <div className="pt-4">
              <Text className="font-medium mb-2">Recent Login Activity</Text>
              <div className="bg-gray-50 rounded-md border border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {staffProfile.securitySettings.loginHistory.map((login, index) => (
                    <li key={index} className="px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Text size="sm" className="font-medium">
                            {login.device}
                          </Text>
                          <Text size="xs" className="text-gray-500">
                            IP: {login.ipAddress}
                          </Text>
                        </div>
                        <Text size="sm" className="text-gray-500">
                          {new Date(login.date).toLocaleString()}
                        </Text>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Notification Preferences Card */}
        <Card title="Notification Preferences">
          <div className="py-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="email-notifications" 
                  className="h-4 w-4 text-blue-600 rounded" 
                  checked={staffProfile.preferences.emailNotifications}
                  readOnly
                />
                <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                  Email Notifications
                </label>
                <Text size="xs" className="text-gray-500 ml-2">
                  (Receive notifications about new requests and updates)
                </Text>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="sms-notifications" 
                  className="h-4 w-4 text-blue-600 rounded" 
                  checked={staffProfile.preferences.smsNotifications}
                  readOnly
                />
                <label htmlFor="sms-notifications" className="ml-3 text-sm text-gray-700">
                  SMS Notifications
                </label>
                <Text size="xs" className="text-gray-500 ml-2">
                  (Receive urgent notifications via SMS)
                </Text>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="display-pending-count" 
                  className="h-4 w-4 text-blue-600 rounded" 
                  checked={staffProfile.preferences.displayPendingCount}
                  readOnly
                />
                <label htmlFor="display-pending-count" className="ml-3 text-sm text-gray-700">
                  Display Pending Request Count
                </label>
                <Text size="xs" className="text-gray-500 ml-2">
                  (Show the number of pending requests in dashboard)
                </Text>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default View Mode
              </label>
              <select 
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-sm"
                value={staffProfile.preferences.defaultViewMode}
                readOnly
              >
                <option value="compact">Compact</option>
                <option value="detailed">Detailed</option>
              </select>
            </div>
            
            <div className="mt-6">
              <Button 
                onClick={handleUpdatePreferences}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </StaffTemplate>
  );
}

export default Profile;