import { Link, useLocation } from "react-router-dom";
import { MenuItem, SidebarData } from "./sidebarData";
import { MenuOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { ChevronsLeft } from "lucide-react";
import LOGO from "../assets/image/logo.svg";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar Container */}
      <div
        className={classNames(
          "fixed top-0 left-0 h-full bg-[#314051] transition-all duration-300 z-40",
          isOpen ? "w-64" : "w-16"
        )}
      >
        {/* Sidebar Toggle Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <ChevronsLeft className="text-2xl" />
          ) : (
            <MenuOutlined className="text-2xl" />
          )}
        </button>
        <Link
          to="/dashboard/landing"
          className="flex  justify-center items-start gap-2 p-3 my-2 mt-14 mb-6"
        >
          <div className="flex items-center justify-center gap-2">
            <img src={LOGO} alt="Finot Logo" className="w-12" />
            {isOpen ? (
              <div className="text-white">
                አየር ጤና አንቀጸ ብርሃን ቅድስት ኪዳነምሕረት ቤተክርስቲያን
              </div>
            ) : null}
          </div>
        </Link>
        <div className="flex-1 py-3 flex-col gap-0.5 text-sm">
          {SidebarData.map((item) => (
            <SidebarLink key={item.key} item={item} isOpen={isOpen} />
          ))}
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

interface sidebarLinkProps {
  item: MenuItem;
  isOpen: boolean;
}
function SidebarLink({ item, isOpen }: sidebarLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={`/dashboard/${item?.path}`}
      className={classNames(
        pathname.includes(item?.path)
          ? "bg-[#4ca696] px-4 text-white font-bold"
          : "text-white px-4 h-14",
        "flex items-center gap-2 py-2 hover:no-underline",
        isOpen ? "justify-start" : "justify-center"
      )}
    >
      <span className="text-xl">{item?.icon}</span>
      {isOpen && <span className="hidden lg:inline-block">{item?.label}</span>}
    </Link>
  );
}

export default Sidebar;
