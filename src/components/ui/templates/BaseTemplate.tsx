import { FC } from 'hono/jsx';
import { Layout } from '../Layout';
import Header from '../../organisms/common/Header';
import Sidebar from '../../organisms/common/Sidebar';

type BaseTemplateProps = {
  children: any;
  title: string;
  activeSection?: string;
  sidebarContent?: (activeSection: string) => JSX.Element;
};

export const BaseTemplate: FC<BaseTemplateProps> = ({
  children,
  title,
  activeSection = 'dashboard',
  sidebarContent
}) => {
  return (
    <Layout>
      <div className="flex h-screen overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-64 h-full">
          {sidebarContent ? sidebarContent(activeSection) : <Sidebar activeSection={activeSection} />}
        </div>

        {/* Right side content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header title={title} />
          
          <main className="flex-1 overflow-y-auto p-6" hx-boost="true">
            {children}
          </main>
        </div>
        
        {/* Mobile drawer */}
        <div className="lg:hidden">
          <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
              {sidebarContent ? sidebarContent(activeSection) : <Sidebar activeSection={activeSection} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};