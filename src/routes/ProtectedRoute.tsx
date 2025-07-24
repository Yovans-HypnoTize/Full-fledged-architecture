import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Utilities";

const ProtectedRoute = ({ element }: any) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
