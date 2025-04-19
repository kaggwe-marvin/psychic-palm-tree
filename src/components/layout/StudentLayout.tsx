type StudentLayoutProps = {
  children: JSX.Element;
  title: string;
  user?: {
    email: string;
    role: string;
  };
};

export default function StudentLayout({
  children,
  title,
  user,
}: StudentLayoutProps) {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossOrigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <title>{title} - Student Clearance Portal</title>
            </head>
            <div class="flex h-screen">
       
        <div class="bg-blue-800 text-white w-64 py-4 flex flex-col">
          <div class="px-4 py-4">
            <h1 class="text-xl font-bold">Student Clearance</h1>
          </div>
          <nav class="mt-8">
            <ul>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student/clearance_status" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                  Clearance Status
                </a>
              </li>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student/documents" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  Documents
                </a>
              </li>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student/finance" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Finance
                </a>
              </li>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student/library" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Library
                </a>
              </li>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student/department" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  Department
                </a>
              </li>
              <li class="px-4 py-2 hover:bg-blue-700">
                <a href="/student/profile" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>

        
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
                          {user?.email ? user.email.charAt(0) : "?"}
                          </div>
                          <span class="ml-2 text-gray-700">{user?.email ?? "Unknown"}</span>
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
    </>
    )
}