/**
 * Helper functions to convert Lucia user format to UserContext format
 */
import type { User } from "../components/contexts/UserContext";

/**
 * Convert the Lucia User to our application User type
 */
export function mapUserForContext(luciaUser: any): User {
  return {
    id: luciaUser.id,
    email: luciaUser.email,
    role: luciaUser.role as 'student' | 'staff' | 'admin',
    fullName: luciaUser.fullName,
    department: luciaUser.department, 
    joinDate: luciaUser.joinDate
  };
}
