export default function Breadcrumbs() {
  return (
    <div className="flex items-center space-x-2">
      <a href="/" className="text-gray-500 hover:text-gray-700">
        Profile
      </a>
      <span className="text-gray-500">/</span>
      <a href="/Account" className="text-gray-500 hover:text-gray-700">
        Account
      </a>
      <span className="text-gray-500">/</span>
      <span className="text-gray-700">User Profile</span>
    </div>
  );
}