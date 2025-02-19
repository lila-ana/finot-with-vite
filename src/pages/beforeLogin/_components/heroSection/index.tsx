import React from "react";
import heroImg from "../../../../assets/image/heroImage.png";
import { FaChurch } from "react-icons/fa";
import placeholder from "../../../../assets/image/photo.png";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-4 flex items-center md:flex-row flex-col-reverse justify-between  ">
      <div className="relative flex flex-col items-start gap-6 justify-center w-80 md:w-[500px] z-10 mx-6">
        <div className="flex items-center gap-3 p-2 bg-[#F7D407] rounded-full w-fit ">
          <FaChurch className="text-[#1A44F7] text-lg" />
          <p className="text-[#1A44F7] font-bold">ኪዳነምሕረት 16</p>
        </div>
        <p className="text-2xl md:text-4xl text-[#1A44F7] font-bold">
          እናት አለኝ የምታብስ እንባ.
          <br /> አያታለሁ ስወጣ ስገባ
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-2 p-4 bg-black/5 rounded-lg backdrop-blur-md">
          <div className="flex flex-col ">
            <p className="">
              ጥፋትን ያይደለ ይቅርታን አሳስቢ። መዓትን ያይደለ ምሕረትን አሳስቢ። ለጻድቃን ያይደለ ለኀጥአን አሳስቢ።
              ለንጹሐን ያይደለ ለተዳደፉት አሳስቢ።
            </p>
            <p className="text-[#1A44F7] mt-2">( ቅዳሴ ማርያም )</p>
          </div>
          <img
            alt="placeholder"
            src={placeholder}
            className="h-32 w-32 bg-slate-500 object-cover rounded-lg"
          />
        </div>
        <a href={"/church_goods"}>
          <div className="flex w-32 animate-bounce transition-all ease-in-out duration-700 hover:bg-blue-800 hover:shadow-lg items-center text-white justify-center p-2 rounded-2xl bg-[#1A44F7]">
            <p className="">ንዋየ ቅዱሳት</p>
          </div>
        </a>
      </div>
      <img
        alt="loginfoto"
        src={heroImg}
        // layout="fill"
        // objectFit="cover"
        className="-z-10 "
      />
    </div>
  );
};

export default HeroSection;
