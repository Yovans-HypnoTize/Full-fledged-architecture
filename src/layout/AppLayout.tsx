import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-[#F6F7F9]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
       
        <main className="flex-1 mx-6 overflow-auto">
        <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
