export default function TopNav() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">My Application</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}