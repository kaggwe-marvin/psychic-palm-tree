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

const app = new Hono<{Bindings: Bindings; Variables: Variables;}>();


app
.get('/departments', (c) => {

  return c.html(<Departments/>);
})
.get('/', async (c) => {
  const user = c.get('user');
  if (!user){
    return c.notFound()
  }
  return c.html(<Dashboard/>);
})
.get('/roles', async (c) => {
  return c.html(<Roles/>);
})
.get('/students', async (c) => {
  return c.html(<Students/>);
})
.get('/users', async (c) => {
  return c.html(<Users/>);
})
.get('/requirements', (c) => {
  return c.html(<Requirements/>);
})
.get('/settings', (c) =>{
  return c.html(<Settings/>)
})
.get('/logs', (c) => {
  return c.html(<Logs/>);
})
.get('/reports', (c) => {
  return c.html(<Reports/>);
})



export default app