
import { text, integer } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";
import { generateId } from "lucia";

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull().$defaultFn(()=> generateId(15)),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull(),
});


export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id').notNull().references(() => users.id),
  expiresAt: integer('expires_at').notNull(),
});