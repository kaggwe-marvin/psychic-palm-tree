import { JSX } from "hono/jsx";

export default function Form({
  children,
  className = "",
}: {
  children: JSX.HTMLFormElement;
  className?: string;
}) {
  return (
    <form
      className={`bg-white shadow-md rounded-lg p-4 dark:bg-gray-800 ${className}`}
    >
      {children}
    </form>
  );
}