import { FC } from 'hono/jsx';
import AdminTemplate from '../../components/ui/templates/AdminTemplate';
import { Card } from '../../components/ui/molecules/Card';

const Logs: FC = () => {
  return (
    <AdminTemplate title="System Logs" activeSection="logs">
      <div className="space-y-6">
        <Card title="Logs">
          <div className="p-4">
            <p>This page is for viewing system logs.</p>
            {/* Add logs UI here */}
          </div>
        </Card>
      </div>
    </AdminTemplate>
  );
};

export default Logs;
