import NavItem from '../molecules/NavItem';
import DaisyButton from '../atoms/DaisyButton';

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-primary text-primary-content min-h-full w-64 p-4">
        <li className="font-bold text-lg mb-4">Student Clearance</li>
        <NavItem href="/student" label="Dashboard" />
        <NavItem href="/student/clearance_status" label="Clearance Status" />
        <NavItem href="/student/documents" label="Documents" />
        <li className="mt-auto">
          <form method="POST" action="/auth/logout">
            <DaisyButton variant="error" className="w-full" type="submit">Logout</DaisyButton>
          </form>
        </li>
      </ul>
    </div>
  );
}