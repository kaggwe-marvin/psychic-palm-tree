import StudentLayout from "../components/layout/StudentLayout"

export default function StudentPortal() {
  return (
    <StudentLayout>
    <div>
      <h1>Student Portal</h1>
      <p>Welcome to the Student Portal. Here you can access your profile, grades, courses, and assignments.</p>
      <ul>
        <li><a href="/student/profile">Profile</a></li>
        <li><a href="/student/grades">Grades</a></li>
        <li><a href="/student/courses">Courses</a></li>
        <li><a href="/student/assignments">Assignments</a></li>
      </ul>
    </div>
    </StudentLayout>
  );
}