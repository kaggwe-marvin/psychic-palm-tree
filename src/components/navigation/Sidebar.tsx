export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            Settings
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
}