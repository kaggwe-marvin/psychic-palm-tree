
import Sidebar from '../../organisms/common/Sidebar';
import { BaseTemplate } from './BaseTemplate';

type StaffTemplateProps = {
  children: any;
  title: string;
  activeSection?: string;
};

export default function StaffTemplate({ 
  children, 
  title, 
  activeSection 
}: StaffTemplateProps) {
 
  
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