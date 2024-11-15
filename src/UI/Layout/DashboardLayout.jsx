import SideBar from "../../Components/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
