import { JSX } from 'hono/jsx';
import { BaseTemplate } from './BaseTemplate';
import Sidebar from '../../organisms/common/Sidebar';

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
  
  return (
    <BaseTemplate 
      title={title} 
      activeSection={activeSection}
      sidebarContent={(activeSection) => <Sidebar activeSection={activeSection} />}
    >
      {children}
    </BaseTemplate>

  );
}