import StudentLayout from "../../components/layout/StudentLayout";

export default function ClearanceStatus() {
    return (
        <StudentLayout title="Clearance Status">
            <div class="bg-white rounded-lg shadow p-6 mb-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Clearance Progress</h3>
                <div class="relative">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div style={{ width: "65%" }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-center">
                            <div class="rounded-full h-8 w-8 flex items-center justify-center bg-green-500 text-white mx-auto">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="mt-2 text-xs font-medium">Finance</p>
                        </div>
                        <div class="text-center">
                            <div class="rounded-full h-8 w-8 flex items-center justify-center bg-green-500 text-white mx-auto">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="mt-2 text-xs font-medium">Hostel</p>
                        </div>
                        <div class="text-center">
                            <div class="rounded-full h-8 w-8 flex items-center justify-center bg-red-500 text-white mx-auto">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="mt-2 text-xs font-medium">Library</p>
                        </div>
                        <div class="text-center">
                            <div class="rounded-full h-8 w-8 flex items-center justify-center bg-yellow-500 text-white mx-auto">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="mt-2 text-xs font-medium">Department</p>
                        </div>
                        <div class="text-center">
                            <div class="rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 text-gray-600 mx-auto">
                                <span class="text-xs font-medium">5</span>
                            </div>
                            <p class="mt-2 text-xs font-medium">IT Services</p>
                        </div>
                        <div class="text-center">
                            <div class="rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 text-gray-600 mx-auto">
                                <span class="text-xs font-medium">6</span>
                            </div>
                            <p class="mt-2 text-xs font-medium">Certificate</p>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        3 of 6 departments cleared
                    </span>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 class="text-lg font-medium text-gray-900">Detailed Status</h3>
                </div>
                <div>
                    <div class="border-b border-gray-200">
                        <button class="w-full px-6 py-4 text-left focus:outline-none"
                            hx-get="/api/clearance/finance/details"
                            hx-target="#finance-details"
                            hx-swap="innerHTML">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="text-base font-medium text-gray-900">Finance Department</h4>
                                        <p class="text-sm text-gray-500">Tuition and fees</p>
                                    </div>
                                </div>
                                <div>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Cleared
                                    </span>
                                </div>
                            </div>
                        </button>
                        <div id="finance-details" class="px-6 py-4 bg-gray-50 hidden"></div>
                    </div>

                    <div class="border-b border-gray-200">
                        <button class="w-full px-6 py-4 text-left focus:outline-none"
                            hx-get="/api/clearance/library/details"
                            hx-target="#library-details"
                            hx-swap="innerHTML">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="text-base font-medium text-gray-900">Library</h4>
                                        <p class="text-sm text-gray-500">Outstanding books and fines</p>
                                    </div>
                                </div>
                                <div>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        Pending
                                    </span>
                                </div>
                            </div>
                        </button>
                        <div id="library-details" class="px-6 py-4 bg-gray-50 hidden">
                            <p class="text-sm text-gray-500">You have 2 overdue books and a fine of $15.</p>
                            <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Pay Fine</button>
                        </div>
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}
