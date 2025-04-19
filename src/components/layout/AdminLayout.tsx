import * as JSX from "hono/jsx";

type AdminLayoutProps = {
  children: JSX.Element;
  title: string;
  user?: {
    email: string;
    role: string;
  };
};

export default function AdminLayout({
  children,
  title,
  user,
}: AdminLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} - Admin Portal | Clearance System</title>
        <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossOrigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100 font-sans">
      <div class="flex h-screen">
        
        <div class="bg-indigo-900 text-white w-64 py-4 flex flex-col z-10">
          <div class="px-4 py-2 flex items-center">
            <svg class="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1 class="text-xl font-bold">Clearance Admin</h1>
          </div>
          
          <div class="mt-10">
            <nav>
              <div class="px-4 py-2 text-xs uppercase tracking-wider text-indigo-300">Dashboard</div>
              <a href="/admin" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Dashboard
              </a>
              
              <div class="px-4 py-2 mt-4 text-xs uppercase tracking-wider text-indigo-300">Users</div>
              <a href="/admin/users" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                User Management
              </a>
              <a href="/admin/roles" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 21H5v-6l2.257-2.257A6 6 0 1119 9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Roles & Permissions
              </a>
              
              <div class="px-4 py-2 mt-4 text-xs uppercase tracking-wider text-indigo-300">Clearance</div>
              <a href="/admin/departments" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Departments
              </a>
              <a href="/admin/requirements" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Requirements
              </a>
              <a href="/admin/students" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Students
              </a>
              
              <div class="px-4 py-2 mt-4 text-xs uppercase tracking-wider text-indigo-300">System</div>
              <a href="/admin/reports" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Reports
              </a>
              <a href="/admin/settings" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Settings
              </a>
              <a href="/admin/logs" class="flex items-center px-4 py-3 hover:bg-indigo-800 text-indigo-100">
                <svg class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                System Logs
              </a>
            </nav>
          </div>
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
                  <div class="flex items-center">
                    
                    <div class="relative mr-4">
                      <input type="text" 
                             placeholder="Search..." 
                             class="bg-gray-100 text-gray-800 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             hx-get="/api/search"
                             hx-trigger="keyup changed delay:500ms"
                             hx-target="#search-results"/>
                      <div class="absolute left-3 top-2.5">
                        <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div id="search-results" class="absolute top-16 right-0 bg-white shadow-lg rounded-lg w-96 z-20 hidden"></div>
                    
                    
                    <button class="p-1 rounded-full text-gray-500 hover:text-indigo-600 focus:outline-none mr-4"
                            hx-get="/api/notifications"
                            hx-trigger="click"
                            hx-target="#notification-panel">
                      <div class="relative">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="flex h-5 w-5 absolute -top-2 -right-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-5 w-5 bg-indigo-500 text-xs text-white justify-center items-center">3</span>
                        </span>
                      </div>
                    </button>
                    <div id="notification-panel" class="absolute top-16 right-0 bg-white shadow-lg rounded-lg w-96 z-20 hidden"></div>
                    
                    
                    <div class="ml-3 relative">
                      <div>
                        <button type="button" 
                                class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none"
                                id="user-menu-button"
                                hx-get="/api/user-menu"
                                hx-trigger="click"
                                hx-target="#user-menu">
                          <span class="sr-only">Open user menu</span>
                          <div class="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                          {user?.email ? user.email.charAt(0) : "?"}
                          </div>
                          <span class="ml-2 text-gray-700">{user?.email ?? "Unknown"}</span>
                          <svg class="h-5 w-5 ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                      <div id="user-menu" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          
          <div class="bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="py-3 flex items-center text-sm text-gray-500">
                <a href="/admin/dashboard" class="hover:text-indigo-600">Home</a>
                <svg class="h-4 w-4 mx-2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-gray-700 font-medium">{title}</span>
              </div>
            </div>
          </div>

          
          <main class="flex-1 overflow-y-auto bg-gray-100 p-6">
            {children}
          </main>
        </div>
      </div>
    </body>
    </html>
    )
}