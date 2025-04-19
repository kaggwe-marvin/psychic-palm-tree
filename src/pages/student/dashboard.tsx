import StudentLayout from "../../components/layout/StudentLayout"

export default function Dashboard({ user }: { user?: any }) {
  return (
    <StudentLayout title="Dashboard" user={user}>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-2">Overall Progress</h3>
      <div class="relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <div>
            {/* <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              ${overallProgress}% Complete
            </span> */}
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div style="width:${overallProgress}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
        </div>
      </div>
      <div class="mt-4">
        <a href="/student/clearance-status" class="text-blue-600 hover:text-blue-800 font-medium">
          View Details →
        </a>
      </div>
    </div>

   
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-2">Pending Items</h3>
      <p class="text-3xl font-bold text-red-600">3</p>
      <ul class="mt-4 space-y-2">
        <li class="flex items-center text-sm text-gray-600">
          <svg class="w-4 h-4 mr-1.5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
          </svg>
          Outstanding Library Fine
        </li>
        <li class="flex items-center text-sm text-gray-600">
          <svg class="w-4 h-4 mr-1.5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
          </svg>
          Department Form Submission
        </li>
        <li class="flex items-center text-sm text-gray-600">
          <svg class="w-4 h-4 mr-1.5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
          </svg>
          Final Fee Payment
        </li>
      </ul>
    </div>

    
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-2">Next Steps</h3>
      <ol class="mt-4 space-y-4">
        <li class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600">
              1
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Visit Library</p>
            <p class="text-xs text-gray-500">Clear all outstanding books and fines</p>
          </div>
        </li>
        <li class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
              2
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Submit Department Form</p>
            <p class="text-xs text-gray-500">Get approval from your department head</p>
          </div>
        </li>
      </ol>
    </div>
  </div>

  
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="px-6 py-4 border-b border-gray-200">
      <h3 class="text-lg font-medium text-gray-900">Recent Updates</h3>
    </div>
    <div class="p-6 divide-y divide-gray-200">
      <div class="py-4 first:pt-0 last:pb-0">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <span class="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
              <svg class="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-3.87 0-12 1.94-12 6v2h24v-2c0-4.06-8.13-6-12-6z"></path>
              </svg>
            </span>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Finance Department</p>
            <p class="text-sm text-gray-500">Your payment receipt has been verified. Finance clearance approved.</p>
            <p class="mt-1 text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>
      </div>
      <div class="py-4 first:pt-0 last:pb-0">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <span class="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
              <svg class="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-3.87 0-12 1.94-12 6v2h24v-2c0-4.06-8.13-6-12-6z"></path>
              </svg>
            </span>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Library</p>
            <p class="text-sm text-gray-500">You have an outstanding fine of $12.50. Please clear this to complete your library clearance.</p>
            <p class="mt-1 text-xs text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-6 py-3">
      <div hx-get="/api/updates" hx-trigger="click" class="text-center">
        <button class="text-sm text-blue-600 hover:text-blue-800 font-medium">Load More</button>
      </div>
    </div>
  </div>
  </StudentLayout>
  );
}