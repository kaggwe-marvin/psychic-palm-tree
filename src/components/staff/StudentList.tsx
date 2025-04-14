export default function StudentList() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Student List</h2>
      <p className="text-gray-500">
        The student list provides an overview of all students enrolled in the course, including their names and IDs.
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Enrolled Students</h3>
        <ul className="list-disc list-inside">
          <li>John Doe (ID: 12345)</li>
          <li>Jane Smith (ID: 67890)</li>
          <li>Emily Johnson (ID: 54321)</li>
        </ul>
      </div>
    </div>
  );
}