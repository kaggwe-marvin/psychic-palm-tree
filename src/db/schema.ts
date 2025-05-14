
import { text, integer } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";
import { generateId } from "lucia";

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull().$defaultFn(()=> generateId(15)),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull(),
  name: text('name'),
  department: text('department'),
  position: text('position'),
  phone: text('phone'),
  
  lastLogin: integer('last_login'),
  createdAt: integer('created_at').$defaultFn(() => Math.floor(Date.now() / 1000)),
});

export const departments = sqliteTable('departments', {
  id: text('id').primaryKey().notNull().$defaultFn(()=> generateId(15)),
  name: text('name').notNull(),
  code: text('code').notNull().unique(),
  description: text('description'),
  headOfDepartment: text('head_of_department'),
  email: text('email'),
  phone: text('phone'),
  location: text('location'),
  createdAt: integer('created_at').$defaultFn(() => Math.floor(Date.now() / 1000)),
});

export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SelectDepartment = typeof departments.$inferSelect;
export type InsertDepartment = typeof departments.$inferInsert;

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id').notNull().references(() => users.id),
  expiresAt: integer('expires_at').notNull(),
});