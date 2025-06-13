import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { and, eq } from 'drizzle-orm';
import { requireRole } from '../../middleware';
import { Bindings, Variables } from '../../bindings';
import { users } from '../../db/schema';
import { UserManagementTable } from '../../components/organisms/admin/UserManagementTable';
import UserForm from '../../components/ui/molecules/UserForm';

// Create a properly typed Hono app
const app = new Hono<{Bindings: Bindings; Variables: Variables}>();

// Apply admin role requirement to all routes
app.use('*', requireRole(['admin']));

// Get all users
app.get('/', async (c) => {
  const db = drizzle(c.env.DB);
  
  // Handle filtering by role if query param is provided
  const role = c.req.query('role');
  
  let results;
  if (role) {
    results = await db.select().from(users).where(eq(users.role, role));
  } else {
    results = await db.select().from(users);
  }
  
  return c.html(
    <div id="users-content">
      <UserManagementTable 
        users={results}
        onAddUser={() => {}}
        onUpdateUser={() => {}}
        onDeleteUser={() => {}}
        onToggleUserStatus={() => {}}
        partial={true}
      />
    </div>
  );
});

// Get form for adding new user
app.get('/new-form', (c) => {
  return c.html(
    <UserForm 
      mode="create"
      formId="create-user-form"
    />
  );
});

// Get form for editing a user
app.get('/:id/edit-form', async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param('id');
  
  try {
    const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    
    if (!user || user.length === 0) {
      return c.html(
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          User not found. The user may have been deleted.
        </div>
      );
    }
    
    return c.html(
      <UserForm 
        mode="edit"
        user={user[0]}
        formId={`edit-user-${id}-form`}
      />
    );
  } catch (error) {
    return c.html(
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
        Error loading user: {error.message}
      </div>
    );
  }
});

// Create a new user
app.post('/', async (c) => {
  const db = drizzle(c.env.DB);
  const formData = await c.req.formData();
  
  // Extract user data from form
  const email = formData.get('email')?.toString() || '';
  const fullName = formData.get('fullName')?.toString() || '';
  const password = formData.get('password')?.toString() || '';
  const role = formData.get('role')?.toString() || 'student';
  const department = formData.get('department')?.toString() || null;
  const active = formData.get('active') === 'true';
  
  // Basic validation
  if (!email) {
    c.status(400);
    return c.html(
      <div id="users-content" className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Email is required.</span>
        </div>
      </div>
    );
  }

  if (!password) {
    c.status(400);
    return c.html(
      <div id="users-content" className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Password is required for new users.</span>
        </div>
      </div>
    );
  }
  
  try {
    // Insert user into database
    await db.insert(users).values({
      email,
      fullName,
      password, // In a real app, you'd hash this password
      role,
      department,
      active,
    });
    
    // Return all users to refresh the table
    const results = await db.select().from(users);
    
    // Apply any filtering that might have been active
    const roleFilter = c.req.query('role');
    let filteredResults = results;
    
    if (roleFilter) {
      filteredResults = results.filter(user => user.role === roleFilter);
    }

    return c.html(
      <div id="users-content">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> User created successfully.</span>
        </div>
        <UserManagementTable 
          users={filteredResults}
          onAddUser={() => {}}
          onUpdateUser={() => {}}
          onDeleteUser={() => {}}
          onToggleUserStatus={() => {}}
          partial={true}
        />
      </div>
    );
  } catch (error) {
    c.status(500);
    return c.html(
      <div id="users-content" className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Failed to create user: {error.message}</span>
        </div>
      </div>
    );
  }
});

// Update a user
app.put('/:id', async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param('id');
  const formData = await c.req.formData();
  
  // Extract user data from form
  const email = formData.get('email')?.toString();
  const fullName = formData.get('fullName')?.toString();
  const role = formData.get('role')?.toString();
  const department = formData.get('department')?.toString();
  const active = formData.get('active') === 'true';
  
  // Only include fields that were provided
  const updateData: any = {};
  if (email) updateData.email = email;
  if (fullName) updateData.fullName = fullName;
  if (role) updateData.role = role;
  if (department) updateData.department = department;
  if (formData.has('active')) updateData.active = active;
  
  try {
    // Update user in database
    await db.update(users)
      .set(updateData)
      .where(eq(users.id, id));
    
    // Return all users to refresh the table
    const results = await db.select().from(users);
    
    return c.html(
      <UserManagementTable 
        users={results}
        onAddUser={() => {}}
        onUpdateUser={() => {}}
        onDeleteUser={() => {}}
        onToggleUserStatus={() => {}}
        partial={true}
      />
    );
  } catch (error) {
    return c.text(`Error updating user: ${error.message}`, 500);
  }
});

// Toggle user active status
app.post('/:id/toggle-status', async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param('id');
  
  try {
    // First get the current status
    const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    
    if (!user || user.length === 0) {
      return c.text('User not found', 404);
    }
    
    // Toggle the active status
    await db.update(users)
      .set({ active: !user[0].active })
      .where(eq(users.id, id));
    
    // Return all users to refresh the table
    const results = await db.select().from(users);
    
    return c.html(
      <UserManagementTable 
        users={results}
        onAddUser={() => {}}
        onUpdateUser={() => {}}
        onDeleteUser={() => {}}
        onToggleUserStatus={() => {}}
        partial={true}
      />
    );
  } catch (error) {
    return c.text(`Error toggling user status: ${error.message}`, 500);
  }
});

// Delete a user
app.delete('/:id', async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param('id');
  
  try {
    // Delete user from database
    await db.delete(users).where(eq(users.id, id));
    
    // Return all users to refresh the table
    const results = await db.select().from(users);
    
    // Apply any filtering that might have been active
    const role = c.req.query('role');
    let filteredResults = results;
    
    if (role) {
      filteredResults = results.filter(user => user.role === role);
    }
    
    return c.html(
      <div id="users-content">
        <UserManagementTable 
          users={filteredResults}
          onAddUser={() => {}}
          onUpdateUser={() => {}}
          onDeleteUser={() => {}}
          onToggleUserStatus={() => {}}
          partial={true}
        />
      </div>
    );
  } catch (error) {
    // Return a properly formatted error that HTMX can handle
    c.status(500);
    return c.html(
      <div id="users-content" class="p-4">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline"> Failed to delete user: {error.message}</span>
        </div>
      </div>
    );
  }
});

export default app;