import { FC } from 'hono/jsx'
import { PropsWithChildren } from 'hono/jsx'
import { Layout } from '../Layout'
import { Navbar } from '../organisms/Navbar'
import Sidebar from '../organisms/Sidebar'

type DashboardTemplateProps = PropsWithChildren<{
  title: string
  user?: {
    email: string;
    role: string;
  };
  activeSection: string
  notifications?: number
}>

export const DashboardTemplate: FC<DashboardTemplateProps> = ({ 
  children, 
  title,
  user,
  activeSection,
  notifications = 0
}) => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <Navbar title={title} userName={user?.email} notifications={notifications} />
        
        <div className="flex">
          <Sidebar userRole={user.role} activeSection={activeSection} />
          
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}