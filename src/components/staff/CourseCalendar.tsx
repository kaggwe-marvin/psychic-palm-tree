export default function CourseCalendar() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Course Calendar</h2>
      <p className="text-gray-500">
        The course calendar is a visual representation of the course schedule, including important dates and deadlines.
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Upcoming Events</h3>
        <ul className="list-disc list-inside">
          <li>Course Start Date: January 15, 2024</li>
          <li>Midterm Exam: March 1, 2024</li>
          <li>Final Exam: May 15, 2024</li>
        </ul>
      </div>
    </div>
  );
}