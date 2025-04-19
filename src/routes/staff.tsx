import { Hono } from "hono";
import Approvals from "../pages/staff/approvals";
import Dashboard from "../pages/staff/dashboard";
import Profile from "../pages/staff/profile";
import Students from "../pages/staff/students";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();



app
app
.use('*', requireRole(['staff, admin']))
.get('/approvals', (c) => {
  const user = c.get('user');
  return c.html(<Approvals user={user}/>);
})
.get('/', (c) => {
  const user = c.get('user');
  if (!user){
    return c.notFound()
  }
  return c.html(<Dashboard user={user}/>);
})
.get('/profile', (c)=>{
  const user = c.get('user');
    return c.html(<Profile user={user}/>)
})
.get('/students', (c)=>{
  const user = c.get('user');
    return c.html(<Students user={user}/>)
})


export default app