import PageTitle from '../molecules/PageTitle';
import MenuIcon from '../atoms/MenuIcon';
import Badge from '../atoms/Badge';
import { useUser } from '../../../contexts/UserContext';
import { Avatar } from '../atoms/Avatar';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const user = useUser();
  return (
    <header className="bg-base-100 shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left section - Most important in F-pattern (first horizontal scan) */}
          <div className="flex items-center space-x-4">
            <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
              <MenuIcon />
            </label>
            <PageTitle title={title} />
            {/* Status indicators - important at the start of the horizontal line */}            <Badge 
              variant={
                user.role === 'admin' ? 'error' : 
                user.role === 'staff' ? 'warning' : 
                'info'
              } 
              className="hidden md:inline-flex"
            >
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
          </div>

          {/* Right section - Tertiary importance */}
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline text-base-content">{user.email}</span>
            <Avatar userEmail={user.email} size="sm" className="hidden sm:flex" />
          </div>
        </div>
      </div>
    </header>
  );
}