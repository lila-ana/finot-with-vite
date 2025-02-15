import { Bell, Mail } from "lucide-react";
import React from "react";

interface HeaderParams {
  props: React.ReactNode;
}
const DashboardHeader: React.FC<HeaderParams> = ({ props }) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-between">
        <span className="text-xl font-semibold">{props}</span>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <span className=" text-sm font-light flex items-end mx-3 mr-3">
            አየር ጤና አንቀጸ ብርሃን ቅድስት ኪዳነምሕረት ቤተክርስቲያን
          </span>
          <div className="mr-5 hover:text-gray-900">
            <Mail />
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Bell />
          </div>
        </div>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Logout
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
