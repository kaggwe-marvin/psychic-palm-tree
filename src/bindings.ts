import { User, Session } from "lucia";
import type { D1Database } from '@cloudflare/workers-types';


export type Bindings = {
    DB: D1Database;
};

export type Variables = {
    user: User | null;
    session: Session | null;
}