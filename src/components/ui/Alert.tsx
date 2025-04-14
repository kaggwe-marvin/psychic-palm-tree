export default function Alert({ message, type }: { message: string; type: string }) {
  // type can be 'success', 'error', 'warning', 'info'
  return (
    <div
      className={`alert alert-${type} shadow-lg mb-4`}
      role="alert"
    >
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
}