import { Hono } from "hono";
import { Bindings, Variables } from "../bindings";
import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { Scrypt } from "lucia";
import { initializeLucia } from "../lib/lucia";
import { getUser, insertUser } from "../lib/utils";
import { z } from "zod";
import AuthTemplate from "../components/ui/templates/AuthTemplate";

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();


//Get the auth pages
app
.get('/', (c) => {
  return c.html(<AuthTemplate mode="login" />);
})
.get('/signup', (c) => {
  return c.html(<AuthTemplate mode="signup" />);
})
.get('/forgot-password', (c) => {
  return c.html(<AuthTemplate mode="forgot" />);
})
.get('/reset-password', (c) => {
  return c.html(<AuthTemplate mode="reset" />);
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

    const username = email.split('@')[0];
    let role: 'student' | 'staff' | 'admin';

    // Student: only digits
    const studentRegex = /^\d+$/;
    // Staff: only letters
    const staffRegex = /^[a-zA-Z]+$/;
    // Admin: combination of letters and digits
    const adminRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;

    if (studentRegex.test(username)) {
      role = 'student';
    } else if (staffRegex.test(username)) {
      role = 'staff';
    } else if (adminRegex.test(username)) {
      role = 'admin';
    } else {
      return c.json({ error: 'Invalid email username format.' }, 400);
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

    const routes: Record<string, string> = {
      student: '/student',
      staff: '/staff',
      admin: '/admin',
    };
    
    return c.redirect(routes[role]);
  }
)

.post('/forgot-password', 
  zValidator(
    'form',
    z.object({
      email: z.string().min(1).email(),
    })
  ),
  async (c) => {
    const { email } = await c.req.valid('form');
    const db = drizzle(c.env.DB);

    const user = await getUser(db, email);
    if (!user) {
      // Even if email doesn't exist, we don't want to leak that info
      return c.json({ success: true }, 200);
    }

    // In a real implementation, we would:
    // 1. Generate a unique, time-limited reset token
    // 2. Store it in the database with the user's ID and an expiration
    // 3. Send an email with a link to the reset page that includes the token

    // For now, we're just returning success
    return c.json({ success: true }, 200);
  }
)

.post('/reset-password',
  zValidator(
    'form',
    z.object({
      token: z.string().min(1),
      password: z.string().min(8),
      confirmPassword: z.string().min(1),
    })
  ),
  async (c) => {
    const { token, password, confirmPassword } = await c.req.valid('form');
    
    // Password confirmation check
    if (password !== confirmPassword) {
      return c.json({ error: 'Passwords do not match.' }, 400);
    }

    // In a real implementation, we would:
    // 1. Verify the token exists and hasn't expired
    // 2. Find the associated user
    // 3. Update their password
    // 4. Invalidate the token

    // For now, we're just returning success (in a real app, you'd validate token)
    return c.json({ success: true }, 200);
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