import { Hono } from 'hono';
import admin from './routes/admin';
import staff from './routes/staff';
import student from './routes/student';
import auth from './routes/auth';
import { Bindings, Variables } from './bindings';
import { authMiddleware } from './middleware';
import { csrf } from 'hono/csrf';


const app = new Hono<{Bindings: Bindings; Variables: Variables;}>();


app
.use(csrf())
.use('*', authMiddleware)


app
.get('/', async (c) => {
  const user = c.get('user');
  if (!user) {
    return c.redirect('/auth')
  }
})
.route('/admin', admin)
.route('/staff', staff)
.route('/student', student)
.route('/auth', auth)

export default app;