import { createContext, useContext } from 'hono/jsx';

// Define types for our context
type ToastOptions = {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
};

type UIContextType = {
  showToast: (options: ToastOptions) => void;
  clearToasts: () => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  errors: Record<string, string>;
  setError: (key: string, message: string) => void;
  clearErrors: () => void;
};

// Create context with default values
const UIContext = createContext<UIContextType>({
  showToast: () => {},
  clearToasts: () => {},
  isLoading: false,
  setLoading: () => {},
  errors: {},
  setError: () => {},
  clearErrors: () => {}
});

// Create a provider component
export const UIProvider = ({ children }) => {
  // This would be implemented with useState and actual handlers
  // For a server-rendered app, you'd need to use special techniques
  // to maintain state across requests

  return (
    <UIContext.Provider value={{
      showToast: () => {},
      clearToasts: () => {},
      isLoading: false,
      setLoading: () => {},
      errors: {},
      setError: () => {},
      clearErrors: () => {}
    }}>
      {children}
    </UIContext.Provider>
  );
};

// Create a hook for using this context
export const useUI = () => useContext(UIContext);