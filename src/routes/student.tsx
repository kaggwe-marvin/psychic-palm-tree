import { Context, Hono } from "hono";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";
import { UserProvider } from "../contexts/UserContext";
import { mapUserForContext } from "../lib/userHelper";
import { StudentDashboard } from "../components/ui/pages/student/StudentDashboard";
import ClearanceStatus from "../components/ui/pages/student/clearance_status";
import Documents from "../components/ui/pages/student/documents";
import Profile from "../components/ui/pages/student/profile";
import Finance from "../components/ui/pages/student/finance";
import Library from "../components/ui/pages/student/library";

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
.use('*', requireRole(['student']))
.get('/', (c) => withUserContext(c, <StudentDashboard />))
.get('/clearance_status', (c) => withUserContext(c, <ClearanceStatus />))
.get('/documents', (c) => withUserContext(c, <Documents />))
.get('/profile', (c) => withUserContext(c, <Profile />))
.get('/finance', (c) => withUserContext(c, <Finance />))
.get('/library', (c) => withUserContext(c, <Library />));
// Document routes would go here if implemented
// .route('/api/documents', documentsRoute)

export default app