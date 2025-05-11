import { JSX } from 'hono/jsx';
import PageTitle from '../molecules/PageTitle';
import MenuIcon from '../atoms/MenuIcon';

type HeaderProps = {
  title: string;
  userEmail?: string;
};

export default function Header({ title, userEmail }: HeaderProps) {
  return (
    <header className="bg-base-100 shadow z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden mr-4">
              <MenuIcon />
            </label>
            <PageTitle title={title} />
          </div>
          <div className="flex items-center">
            <span className="ml-2 text-base-content">{userEmail}</span>
          </div>
        </div>
      </div>
    </header>
  );
}