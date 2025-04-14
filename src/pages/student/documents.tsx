import StudentLayout from "../../components/layout/StudentLayout";

export default function Documents() {
  return (
    <StudentLayout title="Documents">
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Clearance Documents</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transcript</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">Ready</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button 
                    class="text-blue-600 hover:text-blue-900"
                    hx-get="/api/documents/transcript"
                    hx-target="#doc-details"
                    hx-swap="innerHTML"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Certificate</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">Pending</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <a 
                    class="text-blue-600 hover:text-blue-900"
                    hx-get="/api/documents/certificate"
                    hx-target="#doc-details"
                    hx-swap="innerHTML"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="doc-details" class="mt-6"></div>
      </div>
    </StudentLayout>
  );
}
