import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F6F7F9]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
