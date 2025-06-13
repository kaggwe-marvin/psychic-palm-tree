import { Hono } from 'hono';
import admin from './routes/admin';
import staff from './routes/staff';
import student from './routes/student';
import auth from './routes/auth';
import { Bindings, Variables } from './bindings';
import { authMiddleware } from './middleware';
import { csrf } from 'hono/csrf';
import { logger } from 'hono/logger';
const app = new Hono<{Bindings: Bindings; Variables: Variables;}>();


app
.use(csrf())
.use(logger())
.use('*', authMiddleware)


app
.get('/', async (c) => {
  const user = c.get('user');
  if (user) {
    // Redirect users based on their role
    const routes = {
      student: '/student',
      staff: '/staff',
      admin: '/admin'
    };
    return c.redirect(routes[user.role] || '/student');
  }
  return c.redirect('/auth')
})
.route('/admin', admin)
.route('/staff', staff)
.route('/student', student)
.route('/auth', auth)

export default app;