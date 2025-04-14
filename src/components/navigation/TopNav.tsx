export default function TopNav(title: string) {
  return (
    <header class="bg-white shadow-sm">
    <div class="px-4 py-3 flex justify-between items-center">
      <div>
        <h2 class="text-xl font-semibold">${title}</h2>
      </div>
      <div class="flex items-center space-x-4">
        <div hx-get="/api/notifications" hx-trigger="load" class="relative">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <span class="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1">3</span>
        </div>
        <div class="flex items-center">
          <img src="/api/placeholder/32/32" alt="User" class="w-8 h-8 rounded-full mr-2"/>
          <span class="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </div>
  </header>
  );
}