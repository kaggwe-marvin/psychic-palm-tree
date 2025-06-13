import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { generateId } from "lucia";

// User and auth tables
export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull(), // "student", "staff", "admin"
  fullName: text('full_name'),
  department: text('department'),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull(),
});

// Department configuration
export const departments = sqliteTable('departments', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  name: text('name').notNull().unique(),
  description: text('description'),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const clearanceRequirements = sqliteTable('clearance_requirements', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  departmentId: text('department_id')
    .notNull()
    .references(() => departments.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  documentRequired: integer('document_required').notNull().$default(() => 1), // Boolean (1 or 0)
  active: integer('active').notNull().$default(() => 1), // Boolean (1 or 0)
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// Clearance workflow
export const clearanceRequests = sqliteTable('clearance_requests', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  studentId: text('student_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  status: text('status').notNull().$default(() => 'pending'), // "pending", "in_progress", "completed", "rejected"
  completedAt: text('completed_at'),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const clearanceItems = sqliteTable('clearance_items', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  clearanceRequestId: text('clearance_request_id')
    .notNull()
    .references(() => clearanceRequests.id, { onDelete: 'cascade' }),
  departmentId: text('department_id')
    .notNull()
    .references(() => departments.id),
  requirementId: text('requirement_id')
    .notNull()
    .references(() => clearanceRequirements.id),
  status: text('status').notNull().$default(() => 'pending'), // "pending", "approved", "rejected"
  reviewedBy: text('reviewed_by')
    .references(() => users.id),
  comments: text('comments'),
  reviewedAt: text('reviewed_at'),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// Documents - represents files uploaded by students
export const documents = sqliteTable('documents', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  clearanceItemId: text('clearance_item_id')
    .notNull()
    .references(() => clearanceItems.id, { onDelete: 'cascade' }),
  fileName: text('file_name').notNull(),
  fileKey: text('file_key').notNull(), // Key/path to the actual file in storage
  fileSize: integer('file_size').notNull(),
  mimeType: text('mime_type').notNull(),
  uploadedBy: text('uploaded_by')
    .notNull()
    .references(() => users.id),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  requirementId: text('requirement_id').notNull().references(() => requirements.id),
  comments: text('comments'),
  feedback: text('feedback'), // Staff feedback
  status: text('status').default('pending'), // pending, approved, rejected
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});

// Requirements - represents document types students must submit
export const requirements = sqliteTable('requirements', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  department: text('department'),
  required: integer('required', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});

// Notifications and logging
export const notifications = sqliteTable('notifications', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  message: text('message').notNull(),
  read: integer('read').notNull().$default(() => 0), // Boolean (1 or 0)
  relatedToId: text('related_to_id'), // Optional reference to clearance requests or items
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const systemLogs = sqliteTable('system_logs', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => generateId(15)),
  userId: text('user_id')
    .references(() => users.id),
  action: text('action').notNull(),
  details: text('details'),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// Type Definitions
export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SelectDepartment = typeof departments.$inferSelect;
export type InsertDepartment = typeof departments.$inferInsert;
export type SelectClearanceRequirement = typeof clearanceRequirements.$inferSelect;  
export type InsertClearanceRequirement = typeof clearanceRequirements.$inferInsert;
export type SelectClearanceRequest = typeof clearanceRequests.$inferSelect;
export type InsertClearanceRequest = typeof clearanceRequests.$inferInsert;
export type SelectClearanceItem = typeof clearanceItems.$inferSelect;
export type InsertClearanceItem = typeof clearanceItems.$inferInsert;
export type SelectDocument = typeof documents.$inferSelect;
export type InsertDocument = typeof documents.$inferInsert;
export type SelectNotification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;
export type SelectSystemLog = typeof systemLogs.$inferSelect;
export type InsertSystemLog = typeof systemLogs.$inferInsert;