import { DrizzleD1Database } from 'drizzle-orm/d1';
import { InsertUser, SelectUser, users} from '../db/schema';
import { eq} from 'drizzle-orm';

// Fuction to get existing user by email
// This function is used to check if a user already exists in the database
// before inserting a new user. It returns the user object if found, or null if not.
export async function getUser(
  db: DrizzleD1Database,
  email: string
): Promise<SelectUser | null> {
  const result = await db.select().from(users).where(eq(users.email, email));
  if (!result || result.length === 0) {
    return null;
  }

  return result[0];
}

// Function to get user by ID
// This function retrieves a user by their unique ID
export async function getUserById(
  db: DrizzleD1Database,
  id: string
): Promise<SelectUser | null> {
  const result = await db.select().from(users).where(eq(users.id, id));
  if (!result || result.length === 0) {
    return null;
  }
  
  return result[0];
}

// Function to update user
// Updates an existing user's information and returns the updated user
export async function updateUser(
  db: DrizzleD1Database,
  id: string,
  data: Partial<Omit<InsertUser, 'id'>>
): Promise<SelectUser | null> {
  const result = await db.update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();
  
  if (!result || result.length === 0) {
    return null;
  }
  
  return result[0];
}

// Function to delete user
// Removes a user from the database by their ID
export async function deleteUser(
  db: DrizzleD1Database,
  id: string
): Promise<boolean> {
  const result = await db.delete(users)
    .where(eq(users.id, id))
    .returning({ id: users.id });
    
  return result.length > 0;
}

// Function to get all users
// This function retrieves all users from the database.
// It returns an array of user objects.
export async function getAllUsers(
  db: DrizzleD1Database
): Promise<SelectUser[]> {
  const result = await db.select().from(users);
  return result;
}

// Fuction to create a new user
// This function inserts a new user into the database. It requires the user's role to be specified.
// If the insertion is successful, it returns the newly created user object.
// If the insertion fails, it returns null.
export async function insertUser(
  db: DrizzleD1Database,
  data: InsertUser
): Promise<SelectUser | null> {
  if (!data.role) {
    throw new Error("Role must be provided when inserting a user.");
  }
  
  const result = await db.insert(users).values(data).returning();
  if (!result || result.length === 0) {
    return null;
  }

  return result[0];
}

