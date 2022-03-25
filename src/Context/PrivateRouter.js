import { Navigate } from "react-router-dom";
import { useAuthContext } from "./index";
 
export const PrivateRoute = ({ children }) => {
  const { token } = useAuthContext();
  return token ? children : <Navigate to="/login" />;
};
