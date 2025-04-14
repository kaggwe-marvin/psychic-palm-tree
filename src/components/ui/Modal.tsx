export default function Modal({
  children,
  className = "",
}: {
  children: JSX.Element;
  className?: string;
}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${className}`}
    >
      <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}