import React from "react";
import logoImage from "../../../../assets/image/finotlogo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { Link } from "react-router";

const LandingPageHeader: React.FC = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  console.log(pathname, "is the current path for the page from nav");
  return (
    <div className="flex items-center justify-between w-full bg-white h-20 fixed z-30 bg- md:justify-around p-2 px-4 shadow-xl">
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <img
            src={logoImage}
            alt="logoImg"
            className="h-12 w-12  rounded-full"
          />
        </Link>
        <p className="w-1/2 text-sm hidden md:block ">
          አየር ጤና አንቀጸ ብርሃን ቅድስት ኪዳነምሕረት ቤተክርስቲያን
        </p>
      </div>
      <p className=" text-center flex text-sm text-slate-400">
        በስመ አብ ወወልድ ወመንፈስ ቅዱስ
        <br />
        አሐዱ አምላክ አሜን!
      </p>
      <div className="gap-4 text-sm hidden items-center justify-between p-4 w-fit md:flex">
        <div className="flex items-center justify-center gap-4">
          <p className="text-slate-400 hover:text-[#4ca696]">ፕሮግራሞች</p>
          <p className="text-slate-400 hover:text-[#4ca696]">ጽሑፎች</p>
          <Link to={"/shop"}>
            <p
              className={`hover:text-[#4ca696] ${
                pathname == "/shop"
                  ? "text-[#4ca696] font-bold underline-offset-1"
                  : "text-slate-400"
              }`}
            >
              ንዋየቅዱሳት
            </p>
          </Link>
          <p className="text-slate-400 hover:text-[#4ca696]">ክርስቲያኖች</p>
          <p className="text-slate-400 hover:text-[#4ca696]">ስለ ቤተ ክርስቲያን</p>
          <p className="text-slate-400 hover:text-[#4ca696]">እውቂያዎች</p>
          {/* <Image
          className="w-12 h-12 mb-3 rounded-full shadow-lg"
          src={placeholder}
          alt="Bonnie image"
        /> */}
        </div>
        <div className="flex items-center justify-end">
          <Link to={"/login"}>
            <div className="flex w-32 hover:bg-blue-800 hover:shadow-lg items-center justify-center p-2 rounded-2xl bg-[#4ca696]">
              <p className="font-light text-md text-white">Log in</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex h-full md:hidden overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-[#4ca696] text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            {/* <a to="#" className="block p-2 hover:bg-gray-700">ፕሮግራሞች</a> */}
            <Link to={"/shop"}>
              <p className="block p-2 hover:bg-gray-700">ንዋየ ቅዱሳት</p>
            </Link>
            {/* <a to="#" className="block p-2 hover:bg-gray-700">ክርስቲያኖች</a> */}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20"
            onClick={toggleDrawer}
          ></div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1 w-full">
          {/* Top bar */}
          <div className="h-16 flex items-center justify-between px-4">
            <button className="block bg-re md:hidden" onClick={toggleDrawer}>
              <GiHamburgerMenu className="text-lg" />
            </button>
          </div>

          {/* Main content */}
          {/* <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPageHeader;
