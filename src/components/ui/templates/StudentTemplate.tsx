import { JSX } from 'hono/jsx';
import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';

type StudentTemplateProps = {
  children: JSX.Element;
  title: string;
  userEmail?: string;
};

export default function StudentTemplate({ children, title, userEmail }: StudentTemplateProps) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header title={title} userEmail={userEmail} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
      <Sidebar />
    </div>
  );
}