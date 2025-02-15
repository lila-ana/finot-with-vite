import React, { useState } from "react";
import Sidebar from "./sidebar";
import DashboardHeader from "../components/dashboardHeader";

interface LayoutParams {
  children: React.ReactNode;
  dashboardProps?: React.ReactNode;
}

const Layout: React.FC<LayoutParams> = ({ children, dashboardProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } w-full h-screen overflow-hidden`}
      >
        <div className="flex-1 min-h-screen overflow-hidden bg-[#f3f4f6]">
          <div className="bg-white m-0 p-0">
            <DashboardHeader props={dashboardProps} />
          </div>
          <div className="px-4 py-4">
            <div className="bg-white w-full h-full p-6 mx-3 rounded-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
