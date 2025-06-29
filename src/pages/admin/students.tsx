import { FC } from 'hono/jsx';
import AdminTemplate from '../../components/ui/templates/AdminTemplate';
import { Card } from '../../components/ui/molecules/Card';
const Students: FC = () => {
  return (
    <AdminTemplate title="Students Management" activeSection="students">
      <div className="space-y-6">
        <Card title="Students">
          <div className="p-4">
            <p>This page is for managing students in the system.</p>
            {/* Add student management UI here */}
          </div>
        </Card>
      </div>
    </AdminTemplate>
  );
};

export default Students;
