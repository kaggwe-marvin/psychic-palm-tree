export default function Tabs({
  children,
  className = "",
}: {
  children: JSX.Element;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col bg-white shadow-md rounded-lg p-4 dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}