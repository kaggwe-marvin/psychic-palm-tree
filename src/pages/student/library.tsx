import StudentTemplate from "../../components/ui/templates/StudentTemplate";


export default function Library() {
  return (
    <StudentTemplate
      title="Library Department"
      activeSection="library">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Library Department</h3>

        <div className="mb-4">
          <p className="text-sm text-gray-700">
            Below is your current library clearance status. Return all books and pay any fines to complete library clearance.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <p className="text-sm text-red-700 font-medium">You have 2 overdue books and an outstanding fine of <span className="font-bold">$15.00</span>.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-md overflow-hidden mb-6">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700">Overdue Books</div>
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-3 text-sm flex justify-between">
              <span>📘 Introduction to Algorithms</span>
              <span className="text-red-500">Due: Mar 21</span>
            </li>
            <li className="px-4 py-3 text-sm flex justify-between">
              <span>📗 Software Engineering Basics</span>
              <span className="text-red-500">Due: Mar 30</span>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            hx-post="/api/library/pay-fine"
            hx-target="#fine-response"
            hx-swap="innerHTML"
          >
            Pay Fine
          </button>
        </div>

        <div id="fine-response" className="mt-4"></div>
      </div>
    </StudentTemplate>
  );
}
