import { Context, Next } from "hono";
import { initializeLucia } from "./lib/lucia";
import { getCookie } from "hono/cookie";

export async function authMiddleware(c: Context, next: Next) {
    const lucia = initializeLucia(c.env.DB);

    const sessionId = getCookie(c, lucia.sessionCookieName) ?? null;
    if (!sessionId) {
        c.set('user', null);
        c.set('session', null);
    } else {
        const { user, session } = await lucia.validateSession(sessionId);
        if (session && session.fresh) {
            c.header("Set-Cookie", lucia.createSessionCookie(sessionId).serialize(), {
                append: true,
            });
        }

        if (!session) {
            c.header("Set-Cookie", lucia.createSessionCookie(sessionId).serialize(), {
                append: true,
            });
        }

        c.set('user', user);
        c.set('session', session);
    }

    return next();
}

export function requireRole(roles: string[]) {
    return async (c: Context, next: Next) => {
        const user = c.get('user');
        if (!user || !roles.includes(user.role)) {
            return c.html(`
            <div class="flex items-center justify-center h-screen bg-red-50">
                <div class="text-center p-8 max-w-md bg-white rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
                <p class="mb-4">You don't have permission to view this page. This area is for ${roles.join(' or ')} only.</p>
                <a href="/" class="btn btn-primary">Return to Home</a>
                </div>
            </div>
            `, 403);
        }
        return next();
    };
}