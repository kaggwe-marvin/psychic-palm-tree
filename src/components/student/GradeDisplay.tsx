export default function GradeDisplay({ grade }: { grade: number }) {
  const gradeColor = grade >= 50 ? 'green' : 'red';

  return (
    <div>
      <h2 style={{ color: gradeColor }}>Grade: {grade}</h2>
    </div>
  );
}