export default function UserMenu() {
  return (
    <div className="relative">
      <button className="flex items-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://via.placeholder.com/32"
          alt="User Avatar"
        />
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
        <ul className="py-1">
          <li>
            <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
          </li>
          <li>
            <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          </li>
          <li>
            <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}