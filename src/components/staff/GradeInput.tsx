export default function GradeInput() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Grade Input</h2>
      <p className="text-gray-500">
        The grade input section allows instructors to enter and manage student grades for assignments and exams.
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Grade Entry</h3>
        <form className="flex flex-col gap-2">
          <label htmlFor="student-id" className="text-gray-700">
            Student ID:
          </label>
          <input
            type="text"
            id="student-id"
            className="border border-gray-300 rounded p-2"
          />
          <label htmlFor="assignment-name" className="text-gray-700">
            Assignment Name:
          </label>
          <input
            type="text"
            id="assignment-name"
            className="border border-gray-300 rounded p-2"
          />
          <label htmlFor="grade" className="text-gray-700">
            Grade:
          </label>
          <input
            type="number"
            id="grade"
            className="border border-gray-300 rounded p-2"
          />
          <button type="submit" className="bg-blue-500 text-white rounded p-2">
            Submit Grade
          </button>
        </form>
      </div>
    </div>
  );
}