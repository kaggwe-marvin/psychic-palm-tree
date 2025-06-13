import { User, Session } from "lucia";
import type { D1Database, Fetcher, R2Bucket } from '@cloudflare/workers-types';
import { drizzle, DrizzleD1Database } from 'drizzle-orm/d1';
import * as schema from './db/schema';

export type Bindings = {
  // Ensure you type your DB with your schema
  DB: DrizzleD1Database<typeof schema>;
  ASSETS: Fetcher;
  BKT: R2Bucket;
}

export type Variables = {
    user: User | null;
    session: Session | null;
}

// Then, when initializing the DB instance, do something like:
export const db: DrizzleD1Database<typeof schema> = drizzle< typeof schema >(env.DB);