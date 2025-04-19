import StudentLayout from "../../components/layout/StudentLayout";

export default function Finance({ user }: { user?: any }) {
  return (
    <StudentLayout title="Finance Department" user={user}>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Finance Department</h3>

        <div className="mb-4">
          <p className="text-sm text-gray-700">
            This section shows your tuition and fee payment status. You need to clear all dues before proceeding to the next clearance stage.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800">Outstanding Balance</p>
              <p className="text-xl font-bold text-red-600">$245.00</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Pay Now
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700">Payment History</div>
          <div className="divide-y divide-gray-200">
            <div className="flex justify-between px-4 py-3 text-sm">
              <span>Tuition - Semester 1</span>
              <span className="text-green-600 font-medium">$500.00</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span>Hostel Fees - Semester 1</span>
              <span className="text-green-600 font-medium">$300.00</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span>Library Fine</span>
              <span className="text-red-600 font-medium">$20.00</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button 
            className="text-blue-600 hover:underline text-sm"
            hx-get="/api/finance/receipt"
            hx-target="#receipt"
            hx-swap="innerHTML"
          >
            View Receipt
          </button>
        </div>

        <div id="receipt" className="mt-4"></div>
      </div>
    </StudentLayout>
  );
}
