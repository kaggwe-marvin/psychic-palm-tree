import StudentLayout from "../../components/layout/StudentLayout";

export default function Profile() {
  return (
    <StudentLayout  title="Student Profile">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Student Profile</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value="Kwame Asante"
              readOnly
              className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
            <input
              type="text"
              value="UG20231234"
              readOnly
              className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
              value="kwame.asante@ug.edu.gh"
              readOnly
              className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Programme</label>
            <input
              type="text"
              value="BSc Computer Science"
              readOnly
              className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-800 mb-2">Clearance Summary</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>3 of 6 departments cleared</li>
            <li>Library fine pending</li>
            <li>Awaiting department advisor approval</li>
          </ul>
        </div>
      </div>
    </StudentLayout>
  );
}
