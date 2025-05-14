import { FC } from 'hono/jsx';
import { Card } from '../../molecules/Card';
import AdminTemplate from '../../templates/AdminTemplate';

const Settings: FC = () => {
  return (
    <AdminTemplate title="System Settings" activeSection="settings">
      <div className="space-y-6">
        <Card title="Settings">
          <div className="p-4">
            <p>This page is for managing system settings.</p>
            {/* Add settings UI here */}
          </div>
        </Card>
      </div>
    </AdminTemplate>
  );
};

export default Settings;
