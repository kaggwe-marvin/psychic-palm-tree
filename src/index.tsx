import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono';
import { users } from './db/schema';
import Home from './pages/Home';
import TodoItem from './components/TodoItem';
import { eq } from 'drizzle-orm';

// Add the D1Database type import
import type { D1Database } from '@cloudflare/workers-types';
import AdminPortal from './pages/AdminPortal';
import StaffPortal from './pages/StaffPortal';
import StudentPortal from './pages/StudentPortal';

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
.get('/admin', (c) => {
  return c.html(<AdminPortal/>);
})
.get('/staff', (c) => {
  return c.html(<StaffPortal/>);
})
.get('/student', async (c) => {
  return c.html(<StudentPortal/>);
})

export default app;