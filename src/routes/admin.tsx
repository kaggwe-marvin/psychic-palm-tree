import { Context, Hono } from "hono";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";
import { UserProvider } from "../contexts/UserContext";
import { mapUserForContext } from "../lib/userHelper";
import AdminDashboard from "../components/ui/pages/admin/AdminDashboard";
import Students from "../components/ui/pages/admin/students";
import Users from "../components/ui/pages/admin/users";
import Departments from "../components/ui/pages/admin/departments";
import Requirements from "../components/ui/pages/admin/requirements";
import Settings from "../components/ui/pages/admin/settings";
import Logs from "../components/ui/pages/admin/logs";
import Reports from "../components/ui/pages/admin/reports";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();

// Helper function to handle user checks and context wrapping
const withUserContext = (c: Context, Component: any) => {
  const luciaUser = c.get('user');
  if (!luciaUser) {
    return c.notFound();
  }
  
  // Map Lucia user to our UserContext User type
  const user = mapUserForContext(luciaUser);
  
  return c.html(
    <UserProvider user={user}>
      {Component}
    </UserProvider>
  );
}

app
.use('*', requireRole(['admin']))
.get('/', (c) => withUserContext(c, <AdminDashboard />))
.get('/users', (c) => withUserContext(c, <Users />))
.get('/departments', (c) => withUserContext(c, <Departments />))
.get('/requirements', (c) => withUserContext(c, <Requirements />))
.get('/logs', (c) => withUserContext(c, <Logs />))
.get('/reports', (c) => withUserContext(c, <Reports />))
.get('/settings', (c) => withUserContext(c, <Settings />))
.get('/students', (c) => withUserContext(c, <Students />));

export default app