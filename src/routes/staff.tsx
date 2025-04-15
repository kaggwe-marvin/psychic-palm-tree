import { Hono } from "hono";
import Approvals from "../pages/staff/approvals";
import Dashboard from "../pages/staff/dashboard";
import Profile from "../pages/staff/profile";
import Students from "../pages/staff/students";

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/approvals', (c) => {
  return c.html(<Approvals/>);
})
.get('/', (c) => {
  return c.html(<Dashboard/>);
})
.get('/profile', (c)=>{
    return c.html(<Profile/>)
})
.get('/students', (c)=>{
    return c.html(<Students/>)
})


export default app