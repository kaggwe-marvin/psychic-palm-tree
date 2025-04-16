import { Hono } from "hono";
import Approvals from "../pages/staff/approvals";
import Dashboard from "../pages/staff/dashboard";
import Profile from "../pages/staff/profile";
import Students from "../pages/staff/students";
import { Bindings, Variables } from "../bindings";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();



app
.get('/approvals', (c) => {
  return c.html(<Approvals/>);
})
.get('/', (c) => {
  const user = c.get('user');
  if (!user){
    return c.notFound()
  }
  return c.html(<Dashboard/>);
})
.get('/profile', (c)=>{
    return c.html(<Profile/>)
})
.get('/students', (c)=>{
    return c.html(<Students/>)
})


export default app