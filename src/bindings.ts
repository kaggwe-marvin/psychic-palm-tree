import { User, Session } from "lucia";
import type { D1Database, Fetcher  } from '@cloudflare/workers-types';


export type Bindings = {
    DB: D1Database;
    ASSETS: Fetcher; 
}

export type Variables = {
    user: User | null;
    session: Session | null;
}