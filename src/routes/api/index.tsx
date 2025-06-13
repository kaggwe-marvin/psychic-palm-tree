import { Hono } from 'hono';
import { Bindings, Variables } from '../../bindings';
import userApi from './users';
// Import other routes

const app = new Hono<{Bindings: Bindings; Variables: Variables}>();

// Mount routes
app.route('/api/users', userApi);
// Mount other routes

export default app;