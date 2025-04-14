export default function Table({
  children,
  className = "",
}: {
  children: JSX.Element;
  className?: string;
}) {
  return (
    <table
      className={`min-w-full divide-y divide-gray-200 dark:divide-gray-700 ${className}`}
    >
      {children}
    </table>
  );
}