
import Sidebar from '../../organisms/common/Sidebar';
import { BaseTemplate } from './BaseTemplate';

type AdminTemplateProps = {
  children: any;
  title: string;
  activeSection?: string;
};

export default function AdminTemplate({ 
  children, 
  title, 
  activeSection 
}: AdminTemplateProps) {
  
  
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