import { Context, Hono } from "hono";
import Approvals from "../components/ui/pages/staff/approvals";
import Profile from "../components/ui/pages/staff/profile";
import Students from "../components/ui/pages/staff/students";
import { StaffDashboard } from "../components/ui/pages/staff/StaffDashboard";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";
import { UserProvider } from "../contexts/UserContext";
import { mapUserForContext } from "../lib/userHelper";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();

// Helper function to handle user checks and context wrapping
// The renderFn allows components to be rendered with props derived from the user
const withUserContext = (c: Context, renderFn: (user: any) => any) => {
  const luciaUser = c.get('user');
  if (!luciaUser) {
    return c.notFound();
  }
  // Map Lucia user to our UserContext User type
  const user = mapUserForContext(luciaUser);
  
  return c.html(
    <UserProvider user={user}>
      {renderFn(user)}
    </UserProvider>
  );
}

app
.use('*', requireRole(['staff']))
.get('/', (c) => withUserContext(c, (user) => (
  <StaffDashboard 
    staffName={user.name || 'Staff User'} 
    staffEmail={user.email}
    departmentName={user.department || 'Unknown Department'} 
  />
)))
.get('/approvals', (c) => withUserContext(c, () => <Approvals />))
.get('/profile', (c) => withUserContext(c, () => <Profile />))
.get('/students', (c) => withUserContext(c, () => <Students />));

export default app