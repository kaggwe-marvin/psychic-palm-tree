import { JSX } from "hono/jsx";

type StaffLayoutProps = {
  children: JSX.Element;
  title: string;
  user?: {
    name: string;
    role: string;
  };
};

export default function StaffLayout({
  children,
  title,
  user = { name: "Staff User", role: "Staff" },
}: StaffLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} - Staff Portal | Clearance System</title>
        <script
          src="https://unpkg.com/htmx.org@2.0.4"
          integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+"
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100 font-sans">
        <div class="flex h-screen">
          {/* Sidebar */}
          <div class="bg-blue-900 text-white w-64 py-4 flex flex-col z-10">
            <div class="px-4 py-2 flex items-center">
              <svg
                class="h-8 w-8 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 class="text-xl font-bold">Clearance Staff</h1>
            </div>

            <div class="mt-10">
              <nav>
                <div class="px-4 py-2 text-xs uppercase tracking-wider text-blue-300">
                  Dashboard
                </div>
                <a
                  href="/staff"
                  class="flex items-center px-4 py-3 hover:bg-blue-800 text-blue-100"
                >
                  <svg
                    class="h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Dashboard
                </a>

                <div class="px-4 py-2 mt-4 text-xs uppercase tracking-wider text-blue-300">
                  Clearance
                </div>
                <a
                  href="/staff/students"
                  class="flex items-center px-4 py-3 hover:bg-blue-800 text-blue-100"
                >
                  <svg
                    class="h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14l9-5-9-5-9 5 9 5z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Student Clearance
                </a>
                <a
                  href="/staff/approvals"
                  class="flex items-center px-4 py-3 hover:bg-blue-800 text-blue-100"
                >
                  <svg
                    class="h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 21H5v-6l2.257-2.257A6 6 0 1119 9z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Approvals
                </a>

                <div class="px-4 py-2 mt-4 text-xs uppercase tracking-wider text-blue-300">
                  Profile
                </div>
                <a
                  href="/staff/profile"
                  class="flex items-center px-4 py-3 hover:bg-blue-800 text-blue-100"
                >
                  <svg
                    class="h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Profile
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div class="flex-1 flex flex-col overflow-hidden">
            <header class="bg-white shadow z-10">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                  <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                      <h2 class="text-xl font-semibold text-gray-800">{title}</h2>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="ml-3 relative">
                      <div>
                        <button
                          type="button"
                          class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none"
                        >
                          <span class="sr-only">Open user menu</span>
                          <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            {user.name.charAt(0)}
                          </div>
                          <span class="ml-2 text-gray-700">{user.name}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main class="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}