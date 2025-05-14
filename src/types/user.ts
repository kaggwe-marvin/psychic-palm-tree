
export type UserRole = 'admin' | 'staff' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  position?: string;
  profileImage?: string;
  phone?: string;
  active: boolean;
  lastLogin?: number;
  createdAt: number;
}

export interface UserFormData {
  email: string;
  name: string;
  password?: string;
  confirmPassword?: string;
  role: UserRole;
  department?: string;
  position?: string;
  phone?: string;
  active: boolean;
}