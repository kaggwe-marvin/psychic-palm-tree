import { Hono } from "hono";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/', (c) => {
  return c.html(<Login/>);
})
.get('/courses', (c) => {
  return c.html(<ForgotPassword/>);
})
.get('/dashboard', (c) => {
  return c.html(<ResetPassword/>);
})


export default app