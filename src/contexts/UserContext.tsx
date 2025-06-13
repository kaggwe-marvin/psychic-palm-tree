import { FC } from 'hono/jsx';
import { createContext, useContext } from 'hono/jsx';

/**
 * User type definition with all necessary properties
 */
export interface User {
  id?: string;
  email: string;
  role: 'student' | 'staff' | 'admin';
  fullName?: string;
  department?: string;
  joinDate?: string;
}

/**
 * Default user value
 */
const defaultUser: User = {
  email: '',
  role: 'student'
};

/**
 * Create the context
 */
export const UserContext = createContext<User>(defaultUser);

/**
 * Props for the UserProvider component
 */
type UserProviderProps = {
  user: User;
  children: any;
};

/**
 * Provider component to make user data available to any child component
 */
export const UserProvider: FC<UserProviderProps> = ({ user, children }) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom hook for consuming user context
 */
export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
