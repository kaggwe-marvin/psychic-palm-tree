import { Hono } from "hono";
import Courses from "../pages/staff/courses";
import StaffPortal from "../pages/StaffPortal";
import Dashboard from "../pages/staff/dashboard";
import Profile from "../pages/staff/profile";
import Students from "../pages/staff/students";
import Grades from "../pages/staff/grades";

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/', (c) => {
  return c.html(<StaffPortal/>);
})
.get('/courses', (c) => {
  return c.html(<Courses/>);
})
.get('/dashboard', (c) => {
  return c.html(<Dashboard/>);
})
.get('/profile', (c)=>{
    return c.html(<Profile/>)
})
.get('/students', (c)=>{
    return c.html(<Students/>)
})
.get('/grades', (c)=>{
    return c.html(<Grades/>)
})
export default app