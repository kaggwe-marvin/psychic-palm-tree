import { Hono } from "hono";
import AdminPortal from "../pages/AdminPortal";
import Courses from "../pages/admin/courses";
import Dashboard from "../pages/admin/dashboard";
import Reports from "../pages/admin/reports";
import Settings from "../pages/admin/settings";
import Users from "../pages/admin/users";

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/', (c) => {
  return c.html(<AdminPortal/>);
})
.get('/courses', (c) => {
  return c.html(<Courses/>);
})
.get('/dashboard', async (c) => {
  return c.html(<Dashboard/>);
})
.get('/report', async (c) => {
  return c.html(<Reports/>);
})
.get('/settings', async (c) => {
  return c.html(<Settings/>);
})
.get('/users', async (c) => {
  return c.html(<Users/>);
})


export default app