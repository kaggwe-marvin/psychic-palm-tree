#!/bin/bash

# Create new directories if they don't exist already
mkdir -p src/components/organisms/common
mkdir -p src/components/organisms/admin
mkdir -p src/components/organisms/staff  
mkdir -p src/components/organisms/student
mkdir -p src/pages/admin
mkdir -p src/pages/staff
mkdir -p src/pages/student
mkdir -p src/pages/auth

# Move organisms to appropriate role-specific folders
# Common organisms used across roles
mv src/components/ui/organisms/Header.tsx src/components/organisms/common/
mv src/components/ui/organisms/Navbar.tsx src/components/organisms/common/
mv src/components/ui/organisms/Sidebar.tsx src/components/organisms/common/

# Admin-specific organisms
mv src/components/ui/organisms/DepartmentManagementTable.tsx src/components/organisms/admin/
mv src/components/ui/organisms/UserManagementTable.tsx src/components/organisms/admin/

# Staff-specific organisms
mv src/components/ui/organisms/DocumentReviewForm.tsx src/components/organisms/staff/

# Student-specific organisms
mv src/components/ui/organisms/ClearanceStatusTable.tsx src/components/organisms/student/

# Auth-related organisms
mv src/components/ui/organisms/AuthFormComponent.tsx src/components/organisms/common/

# Move page components to top-level pages directory
mv src/components/ui/pages/admin/* src/pages/admin/
mv src/components/ui/pages/staff/* src/pages/staff/
mv src/components/ui/pages/student/* src/pages/student/
mv src/components/ui/pages/auth/* src/pages/auth/

# Move templates to components/templates
mv src/components/ui/templates/* src/components/templates/

# Move contexts to components/contexts
mv src/components/ui/contexts/* src/components/contexts/

# Move atoms to components/atoms
mv src/components/ui/atoms/* src/components/atoms/

# Move molecules to components/molecules
mv src/components/ui/molecules/* src/components/molecules/

echo "Restructuring complete!"
