import StudentLayout from "../../components/layout/StudentLayout";

export default function Dashboard({ user }: { user?: any }) {
  return (
    <StudentLayout title="Dashboard" user={user}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Clearance Progress */}
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Clearance Progress</h3>
          <div class="relative pt-1">
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div style={{ width: "75%" }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
            </div>
            <p class="text-sm text-gray-600">75% Complete</p>
          </div>
        </div>

        {/* Pending Items */}
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Pending Items</h3>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center text-sm text-gray-600">
              <span class="text-red-500 mr-2">•</span> Outstanding Library Fine
            </li>
            <li class="flex items-center text-sm text-gray-600">
              <span class="text-red-500 mr-2">•</span> Department Form Submission
            </li>
            <li class="flex items-center text-sm text-gray-600">
              <span class="text-red-500 mr-2">•</span> Final Fee Payment
            </li>
          </ul>
        </div>

        {/* Notifications */}
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Notifications</h3>
          <ul class="divide-y divide-gray-200">
            <li class="py-2 text-sm text-gray-600">Finance clearance approved. <span class="text-xs text-gray-500">2 hours ago</span></li>
            <li class="py-2 text-sm text-gray-600">Outstanding library fine of $12.50. <span class="text-xs text-gray-500">1 day ago</span></li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Quick Actions</h3>
          <ul class="space-y-2">
            <li>
              <a href="/student/clearance_status" class="text-blue-600 hover:text-blue-800 font-medium">View Clearance Status</a>
            </li>
            <li>
              <a href="/student/documents" class="text-blue-600 hover:text-blue-800 font-medium">Upload Documents</a>
            </li>
          </ul>
        </div>
      </div>

      
    </StudentLayout>
  );
}