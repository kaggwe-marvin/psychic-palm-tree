import { Hono } from "hono";
import Dashboard from "../pages/student/dashboard";
import Finance from "../pages/student/finance";
import ClearanceStatus from "../pages/student/clearance_status";
import Documents from "../pages/student/documents";
import document from "./documents";
import Library from "../pages/student/library";
import Department from "../pages/student/department";
import Profile from "../pages/student/profile";

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/', (c) => {
  return c.html(<Dashboard/>);
})
.get('/clearance_status', (c) => {
  return c.html(<ClearanceStatus/>);
})
.get('/documents', (c)=>{
    return c.html(<Documents/>)
})
.get('/profile', (c)=>{
    return c.html(<Profile/>)
})
.get('/finance', (c)=>{
    return c.html(<Finance/>)
})
.get('/library', (c)=>{
    return c.html(<Library/>)
})
.get('/department', (c)=>{
    return c.html(<Department/>)
})
.route('/api/documents', document)
export default app