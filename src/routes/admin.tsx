import { Context, Hono } from "hono";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";
import { drizzle } from "drizzle-orm/d1";
import { getAllUsers } from "../lib/utils";
import { mapUserForContext } from "../lib/userHelper";
import { UserProvider } from "../contexts/UserContext";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/users";
import Departments from "../pages/admin/departments";
import Requirements from "../pages/admin/requirements";
import Logs from "../pages/admin/logs";
import Reports from "../pages/admin/reports";
import Settings from "../pages/admin/settings";
import Students from "../pages/admin/students";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

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
.get('/users', async (c) => {
  const db = drizzle(c.env.DB)
  const luciaUser = c.get('user')
  if (!luciaUser) return c.notFound()

  const user = mapUserForContext(luciaUser)
  const users = await getAllUsers(db) // or your actual user query

  return c.html(
    <UserProvider user={user}>
      <Users users={users} />
    </UserProvider>
  )
})

.get('/departments', (c) => withUserContext(c, <Departments />))
.get('/requirements', (c) => withUserContext(c, <Requirements />))
.get('/logs', (c) => withUserContext(c, <Logs />))
.get('/reports', (c) => withUserContext(c, <Reports />))
.get('/settings', (c) => withUserContext(c, <Settings />))
.get('/students', (c) => withUserContext(c, <Students />))


.post('/users/:id/delete', async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param('id');
  
  try {
    // Delete user from database
    await db.delete(users).where(eq(users.id, id));
    
    // Redirect back to users page after successful deletion
    return c.redirect('/admin/users');
  } catch (error) {
    console.error("Error deleting user:", error);
    return c.text(`Error deleting user: ${error.message}`, 500);
  }
})

export default app