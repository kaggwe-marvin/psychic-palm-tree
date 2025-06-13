#!/bin/bash

# This script helps update import paths after the folder restructuring

# Update organisms import paths
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../organisms/|from "../components/organisms/common/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/organisms/|from "../components/organisms/common/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../../ui/organisms/|from "../../components/organisms/common/|g'

# Update atoms import paths
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/atoms/|from "../components/atoms/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../../ui/atoms/|from "../../components/atoms/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../atoms/|from "../components/atoms/|g'

# Update molecules import paths
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/molecules/|from "../components/molecules/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../../ui/molecules/|from "../../components/molecules/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../molecules/|from "../components/molecules/|g'

# Update templates import paths
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/templates/|from "../components/templates/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../../ui/templates/|from "../../components/templates/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../templates/|from "../components/templates/|g'

# Update pages import paths
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/pages/admin/|from "../pages/admin/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/pages/staff/|from "../pages/staff/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/pages/student/|from "../pages/student/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/pages/auth/|from "../pages/auth/|g'

# Update context import paths
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../ui/contexts/|from "../components/contexts/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../../ui/contexts/|from "../../components/contexts/|g'
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|from "../contexts/|from "../components/contexts/|g'

echo "Import paths updated!"
