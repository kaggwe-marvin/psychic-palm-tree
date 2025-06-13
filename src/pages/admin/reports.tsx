import { FC } from 'hono/jsx';
import { Card } from '../../components/ui/molecules/Card';
import AdminTemplate from '../../components/ui/templates/AdminTemplate';
const Reports: FC = () => {
  return (
    <AdminTemplate title="System Reports" activeSection="reports">
      <div className="space-y-6">
        <Card title="Reports">
          <div className="p-4">
            <p>This page is for generating and viewing system reports.</p>
            {/* Add reports UI here */}
          </div>
        </Card>
      </div>
    </AdminTemplate>
  );
};

export default Reports;
