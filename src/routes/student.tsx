import { Hono } from "hono";
import Dashboard from "../pages/student/dashboard";
import Courses from "../pages/student/courses";
import StudentPortal from "../pages/StudentPortal";
import Profile from "../pages/student/profile";
import Grades from "../pages/student/grades";
import Assignments from "../pages/student/assignments";

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/', (c) => {
  return c.html(<StudentPortal/>);
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
.get('/assignments', (c)=>{
    return c.html(<Assignments/>)
})
.get('/grades', (c)=>{
    return c.html(<Grades/>)
})
export default app