import { Hono } from "hono";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import { Bindings, Variables } from "../bindings";
import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { Scrypt } from "lucia";
import { initializeLucia } from "../lib/lucia";
import { getUser, insertUser } from "../lib/utils";
import { z } from "zod";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();


//Get the login and signup pages
app
.get('/', (c) => {
  return c.html(<Login/>);
})
.get('/register', (c) => {
  return c.html(<Signup/>)
});

//Post requests for login and signup
app
.post( '/login',
  zValidator(
    'form',
    z.object({
      email: z.string().min(1).email(),
      password: z.string().min(1).max(255),
    })
  ),
  async (c) => {
    const { email, password } = await c.req.valid('form');
    const db = drizzle(c.env.DB);

    const user = await getUser(db, email);
    if (!user) {
      return c.json({ error: 'Invalid email or password.' }, 400);
    }

    const validPassword = await new Scrypt().verify(user.password, password);
    if (!validPassword) {
      return c.json({ error: 'Invalid email or password.' }, 400);
    }

    const lucia = initializeLucia(c.env.DB);
    const session = await lucia.createSession(user.id, {});
    const cookie = lucia.createSessionCookie(session.id);

    c.header('Set-Cookie', cookie.serialize(), { append: true });

    const routes: Record<string, string> = {
      student: '/student',
      staff: '/staff',
      admin: '/admin',
    };
    
    return c.redirect(routes[user.role] ?? '/');
  }
)
.post('/signup',
  zValidator(
    'form',
    z.object({
      email: z.string().min(1).email(),
      password: z.string().min(1).max(100),
    })
  ),
  async (c) => {
    const { email, password } = await c.req.valid('form');
    const db = drizzle(c.env.DB);

    // Email validation and role assignment
    const mubsDomain = '@mubs.ac.ug';
    if (!email.endsWith(mubsDomain)) {
      return c.json({ error: 'Email must be a @mubs.ac.ug address.' }, 400);
    }

    const studentRegex = /^\d+@mubs\.ac\.ug$/;
    let role: 'student' | 'staff';

    if (studentRegex.test(email)) {
      role = 'student';
    } else if (/^[^@]+@mubs\.ac\.ug$/.test(email)) {
      role = 'staff';
    } else {
      return c.json({ error: 'Invalid @mubs.ac.ug email format.' }, 400);
    }

    const existingUser = await getUser(db, email);
    if (existingUser) {
      return c.json({ error: 'User with that email already exists.' }, 400);
    }

    const passwordHash = await new Scrypt().hash(password);

    

    const user = await insertUser(db, {
      email,
      password: passwordHash,
      role,
    });
    if (!user) {
      return c.json({ error: 'An error occurred during sign up.' }, 500);
    }

    const lucia = initializeLucia(c.env.DB);
    const session = await lucia.createSession(user.id, {});
    const cookie = lucia.createSessionCookie(session.id);

    c.header('Set-Cookie', cookie.serialize(), { append: true });

    return c.redirect(role === 'student' ? '/student' : '/staff');
  }
)

.post('/logout', async (c) => {
  const lucia = initializeLucia(c.env.DB);
  const session = c.get('session');
  if (session) {
    await lucia.invalidateSession(session.id);
  }

  const cookie = lucia.createBlankSessionCookie();

  c.header('Set-Cookie', cookie.serialize(), { append: true });

  return c.redirect('/');
});






export default app