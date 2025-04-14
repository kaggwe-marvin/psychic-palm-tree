import { JSX } from "hono/jsx";

export default function Badge({ children }: { children: JSX.Element }) {
  return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-blue-800 bg-blue-100">
      {children}
    </div>
  );
}