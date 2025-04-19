import StudentLayout from "../../components/layout/StudentLayout";

export default function Department({ user }: { user?: any }) {
  return (
    <StudentLayout title="Department Clearance" user={user}>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Department Clearance</h3>

        <div className="mb-4">
          <p className="text-sm text-gray-700">
            Department clearance typically includes academic advisor approval and submission of final project reports (if applicable).
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <p className="text-sm text-yellow-700 font-medium">
            Awaiting advisor approval. Please contact your advisor or submit the required documents below.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-800 mb-2">Submit Final Report</h4>
          <form
            hx-post="/api/department/upload-report"
            hx-target="#upload-status"
            hx-swap="innerHTML"
            encType="multipart/form-data"
          >
            <input
              type="file"
              name="finalReport"
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              required
            />
            <button
              type="submit"
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Upload Report
            </button>
          </form>
          <div id="upload-status" className="mt-4 text-sm"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700">Advisor Information</div>
          <div className="px-4 py-3 text-sm">
            <p><strong>Name:</strong> Dr. Cynthia Mensah</p>
            <p><strong>Email:</strong> cynthia.mensah@university.edu</p>
            <p><strong>Status:</strong> <span className="text-yellow-600 font-medium">Pending Review</span></p>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
