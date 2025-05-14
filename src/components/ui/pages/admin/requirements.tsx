import { FC } from 'hono/jsx';
import { Card } from '../../molecules/Card';
import AdminTemplate from '../../templates/AdminTemplate';

const Requirements: FC = () => {
  return (
    <AdminTemplate title="Clearance Requirements" activeSection="requirements">
      <div className="space-y-6">
        <Card title="Requirements">
          <div className="p-4">
            <p>This page is for managing clearance requirements in the system.</p>
            {/* Add requirements management UI here */}
          </div>
        </Card>
      </div>
    </AdminTemplate>
  );
};

export default Requirements;
