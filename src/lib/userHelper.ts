/**
 * Helper functions to convert Lucia user format to UserContext format
 */
import type { User } from "../contexts/UserContext";

/**
 * Convert the Lucia User to our application User type
 */
export function mapUserForContext(luciaUser: any): User {
  return {
    id: luciaUser.id,
    email: luciaUser.email,
    role: luciaUser.role as 'student' | 'staff' | 'admin',
    name: luciaUser.name,
    studentId: luciaUser.studentId,
    employeeId: luciaUser.employeeId,
    department: luciaUser.department,
    joinDate: luciaUser.joinDate
  };
}
