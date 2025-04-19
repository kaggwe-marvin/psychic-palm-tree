import { Hono } from "hono";
import Dashboard from "../pages/student/dashboard";
import Finance from "../pages/student/finance";
import ClearanceStatus from "../pages/student/clearance_status";
import Documents from "../pages/student/documents";
import document from "./documents";
import Library from "../pages/student/library";
import Department from "../pages/student/department";
import Profile from "../pages/student/profile";
import { Bindings, Variables } from "../bindings";
import { requireRole } from "../middleware";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();



app
.use('*', requireRole(['student'])) 
.get('/', (c) => {
  const user = c.get('user');
  if (!user){
    return c.notFound()
  }
  return c.html(<Dashboard user={user}/>);
})
.get('/clearance_status', (c) => {
  const user = c.get('user');
  return c.html(<ClearanceStatus user={user}/>);
})
.get('/documents', (c)=>{
  const user = c.get('user');
    return c.html(<Documents user={user}/>)
})
.get('/profile', (c)=>{
  const user = c.get('user');
    return c.html(<Profile user={user}/>)
})
.get('/finance', (c)=>{
  const user = c.get('user');
    return c.html(<Finance user={user}/>)
})
.get('/library', (c)=>{
  const user = c.get('user');
    return c.html(<Library user={user}/>)
})
.get('/department', (c)=>{
  const user = c.get('user');
    return c.html(<Department user={user}/>)
})
.route('/api/documents', document)
export default app