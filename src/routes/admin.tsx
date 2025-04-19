import { Hono } from "hono";
import Dashboard from "../pages/admin/dashboard";
import Roles from "../pages/admin/roles";
import Students from "../pages/admin/students";
import Users from "../pages/admin/users";
import Departments from "../pages/admin/departments";
import Requirements from "../pages/admin/requirements";
import Settings from "../pages/admin/settings";
import Logs from "../pages/admin/logs";
import Reports from "../pages/admin/reports";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";

const app = new Hono<{Bindings: Bindings; Variables: Variables;}>();


app
.use('*', requireRole(['admin'])) 

.get('/departments', (c) => {
  const user = c.get('user');

  return c.html(<Departments user={user}/>);
})
.get('/', async (c) => {
  const user = c.get('user');
  if (!user){
    return c.notFound()
  }
  return c.html(<Dashboard user={user}/>);
})
.get('/roles', async (c) => {
  const user = c.get('user');
  return c.html(<Roles user={user}/>);
})
.get('/students', async (c) => {
  const user = c.get('user');
  return c.html(<Students user={user}/>);
})
.get('/users', async (c) => {
  const user = c.get('user');
  return c.html(<Users user={user}/>);
})
.get('/requirements', (c) => {
  const user = c.get('user');
  return c.html(<Requirements user={user}/>);
})
.get('/settings', (c) =>{
  const user = c.get('user');
  return c.html(<Settings user={user}/>)
})
.get('/logs', (c) => {
  const user = c.get('user');
  return c.html(<Logs user={user}/>);
})
.get('/reports', (c) => {
  const user = c.get('user');
  return c.html(<Reports user={user}/>);
})



export default app