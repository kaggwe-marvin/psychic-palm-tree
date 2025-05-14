import { JSX } from 'hono/jsx';
import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';
import { useUser } from '../../../contexts/UserContext';
import { Layout } from '../Layout';

type StudentTemplateProps = {
  children: JSX.Element;
  title: string;
  activeSection?: string;
};

export default function StudentTemplate({ 
  children, 
  title, 
  activeSection 
}: StudentTemplateProps) {
  // Get user from context
  const user = useUser();
  
  // Check if user has the proper role
  if (user.role !== 'student') {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="mb-4">You don't have permission to view this page. This area is for students only.</p>
          <a href="/" className="btn btn-primary">Return to Home</a>
        </div>
      </div>
    );
  }
  
  return (
    <Layout>
          <div className="flex h-screen overflow-hidden">      {/* Sidebar - Vertical line of the F-Pattern (left side) */}
      <div className="hidden lg:block w-64 h-full">
        <Sidebar activeSection={activeSection} />
      </div>

      {/* Right side content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header/Navbar - Top horizontal line of the F-Pattern */}
        <Header title={title} />
        
        {/* Main Content - Second horizontal line of the F-Pattern */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>      {/* Mobile drawer for responsive design */}
      <div className="lg:hidden">
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <Sidebar activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
    </Layout>

  );
}