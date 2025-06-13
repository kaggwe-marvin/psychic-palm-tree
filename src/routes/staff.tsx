import { Context, Hono } from "hono";
import { mapUserForContext } from "../lib/userHelper";
import { Bindings, Variables } from "../bindings";
import { UserProvider } from "../contexts/UserContext";
import { StaffDashboard } from "../pages/staff/StaffDashboard";
import Approvals from "../pages/staff/approvals";
import Profile from "../pages/staff/profile";
import Students from "../pages/staff/students";
import { requireRole } from "../middleware";

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