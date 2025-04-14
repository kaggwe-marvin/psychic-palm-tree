import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono';
import { students, users } from './db/schema';
import Home from './pages/Home';
import TodoItem from './components/TodoItem';
import admin from './routes/admin';
import staff from './routes/staff';
import student from './routes/student';
import auth from './routes/auth';

// Add the D1Database type import
import type { D1Database } from '@cloudflare/workers-types';

const app = new Hono<{Bindings: Env}>();

export type Env = {
  DB: D1Database
}

app
.get('/', (c) => {
  const db = drizzle(c.env.DB);
  return c.html(<Home/>);
})
.get('/api/todos', async (c) => {
  const db = drizzle(c.env.DB);
  const results = await db.select().from(users);
  console.log(results);
 
  return c.html(
    <>
      {results.map(todo => <TodoItem {...todo} />)}
    </>,
  );
})
.route('/admin', admin)
.route('/staff', staff)
.route('/student', student)
.route('/auth', auth)

export default app;