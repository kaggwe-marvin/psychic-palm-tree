import { sqliteTable, text, integer, uniqueIndex } from "drizzle-orm/sqlite-core";
import { InferSelectModel, relations } from "drizzle-orm";

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  role: text('role').notNull(),
  passwordHash: text('password_hash').notNull(),
});

export const students = sqliteTable('students', {
  userId: text('user_id').primaryKey(),
  registrationNumber: text('registration_number').notNull(),
  program: text('program').notNull(),
  graduationYear: integer('graduation_year').notNull(),
});

export const departments = sqliteTable('departments', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  officerId: text('officer_id')
});

export const clearanceRequests = sqliteTable('clearance_requests', {
  id: text('id').primaryKey(),
  studentId: text('student_id').notNull(),
  departmentId: text('department_id').notNull(),
  status: text('status').notNull().default('pending'),
  remarks: text('remarks'),
  updatedAt: text('updated_at').notNull()
});

// Relations
export const studentsRelations = relations(students, ({ many }) => ({
  clearanceRequests: many(clearanceRequests)
}));

export const departmentsRelations = relations(departments, ({ many }) => ({
  clearanceRequests: many(clearanceRequests)
}));

export const clearanceRequestsRelations = relations(clearanceRequests, ({ one }) => ({
  student: one(students, {
    fields: [clearanceRequests.studentId],
    references: [students.userId],
  }),
  department: one(departments, {
    fields: [clearanceRequests.departmentId],
    references: [departments.id],
  })
}));

export const logs = sqliteTable("logs", {
  id: text("id").primaryKey(),
  action: text("action").notNull(),
  userId: text("user_id").notNull(), 
  targetId: text("target_id"),
  timestamp: text("timestamp").notNull(),
});

export type Student = InferSelectModel<typeof students>;
export type User = InferSelectModel<typeof users>;
export type Department = InferSelectModel<typeof departments>;
export type ClearanceRequest = InferSelectModel<typeof clearanceRequests>;
export type Log = InferSelectModel<typeof logs>;