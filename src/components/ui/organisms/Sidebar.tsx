import { Button } from '../atoms/Button';
import NavItem from '../molecules/NavItem';
import { useUser } from '../../../contexts/UserContext';

type SidebarProps = {
  activeSection?: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const user = useUser();
  const userRole = user.role;
  return (
    <div className="h-full bg-primary text-primary-content">
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Brand/Logo - Top of the F-Pattern (most visible) */}
        <div className="p-4 border-b border-primary-focus">
          <h1 className="font-bold text-xl">Student Clearance</h1>
        </div>
        
        {/* Primary Navigation - Role-specific items */}
        <div className="p-4 space-y-1">
          {/* Common navigation item for all roles */}
          <NavItem 
            href={`/${userRole}`} 
            label="Dashboard" 
            icon="clipboard" 
            isActive={activeSection === 'dashboard'} 
          />
            {/* Student-specific navigation items */}
          {userRole === 'student' && (
            <>
              <NavItem 
                href="/student/clearance_status" 
                label="Clearance Status" 
                icon="check-circle" 
                isActive={activeSection === 'clearance_status'}
              />
              <NavItem 
                href="/student/documents" 
                label="Documents" 
                icon="book-open-text" 
                isActive={activeSection === 'documents'}
              />
              <NavItem 
                href="/student/finance" 
                label="Finance" 
                icon="dollar-sign" 
                isActive={activeSection === 'finance'}
              />
              <NavItem 
                href="/student/library" 
                label="Library" 
                icon="book" 
                isActive={activeSection === 'library'}
              />
              <NavItem 
                href="/student/profile" 
                label="Profile" 
                icon="user" 
                isActive={activeSection === 'profile'}
              />
            </>
          )}
          
          {/* Staff-specific navigation items */}
          {userRole === 'staff' && (
            <>
              <NavItem 
                href="/staff/approvals" 
                label="Pending Requests" 
                icon="inbox" 
                isActive={activeSection === 'approvals'}
              />
              <NavItem 
                href="/staff/students" 
                label="Students" 
                icon="users" 
                isActive={activeSection === 'students'}
              />
              <NavItem 
                href="/staff/profile" 
                label="Profile" 
                icon="user" 
                isActive={activeSection === 'profile'}
              />
            </>
          )}
          
          {/* Admin-specific navigation items */}
          {userRole === 'admin' && (
            <>
              <NavItem 
                href="/admin/users" 
                label="User Management" 
                icon="users" 
                isActive={activeSection === 'users'}
              />
              <NavItem 
                href="/admin/departments" 
                label="Departments" 
                icon="building" 
                isActive={activeSection === 'departments'}
              />
              <NavItem 
                href="/admin/requirements" 
                label="Requirements" 
                icon="clipboard-check" 
                isActive={activeSection === 'requirements'}
              />
              <NavItem 
                href="/admin/logs" 
                label="System Logs" 
                icon="activity" 
                isActive={activeSection === 'logs'}
              />
              <NavItem 
                href="/admin/reports" 
                label="Reports" 
                icon="bar-chart" 
                isActive={activeSection === 'reports'}
              />
              <NavItem 
                href="/admin/settings" 
                label="Settings" 
                icon="settings" 
                isActive={activeSection === 'settings'}
              />
            </>
          )}
        </div>
        
        {/* User Section - Bottom of sidebar */}
        <div className="mt-auto p-4 border-t border-primary-focus">
          <form method="post" action="/auth/logout" className="mt-2">
            <Button variant="outline" className="w-full" type="submit">Logout</Button>
          </form>
        </div>
      </div>
    </div>
  );
}