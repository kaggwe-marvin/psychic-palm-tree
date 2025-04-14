export default function CourseCard({ course }: { course: { name: string; description: string; grade: number } }) {
  const gradeColor = course.grade >= 50 ? 'green' : 'red';

  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <h3 style={{ color: gradeColor }}>Grade: {course.grade}</h3>
    </div>
  );
}