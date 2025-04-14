export default function AssignmentList({ assignments }: { assignments: { title: string; description: string; dueDate: string }[] }) {
  return (
    <div className="assignment-list">
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p>Due Date: {assignment.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}