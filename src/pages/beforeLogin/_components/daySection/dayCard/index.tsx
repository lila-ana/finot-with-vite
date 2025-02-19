import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";
import placeholder from "../../../../../assets/image/friday.png";
import placeholder1 from "../../../../../assets/image/photo1.png";

function DayCard() {
  return (
    <div className="relative scale-75 md:scale-100">
      <div className="w-96 bg-white absolute z-10 p-4 top-0 left-8 rounded-lg shadow-lg">
        <img
          src={placeholder}
          alt="day1"
          className="h-72 w-full object-cover rounded-md"
        />
        <p className="text-sm text-slate-600 mt-2">
          እግዚአብሔር ቸር ፣ ምሕረቱም ለዘላለም ነውና ፤ ታማኝነቱም ከትውልድ እስከ ትውልድ ነው።
        </p>
        <p className="font-bold text-[#1A44F7] ">ዓርብ የፍቅር ቀን</p>

        <div className="mt-2 flex gap-2">
          <FaFacebook className="text-xl text-slate-400 hover:text-[#1A44F7]" />
          <FaInstagramSquare className="text-xl text-slate-400 hover:text-[#1A44F7]" />
          <FaTelegram className="text-xl text-slate-400 hover:text-[#1A44F7]" />
          <FaTiktok className="text-xl text-slate-400 hover:text-[#1A44F7]" />
        </div>
      </div>
      <div className=" p-4 w-96 bg-secondary rounded-lg z-20 -rotate-6  shadow-lg">
        <img src={placeholder1} alt="day2" className="h-72 w-full rounded-md" />
        <p className="text-sm text-slate-600 mt-2">
          ፍቅር ይታገሣል፥ ቸርነትንም ያደርጋል፤ ፍቅር አይቀናም፤ ፍቅር አይመካም፥ አይታበይም፤
        </p>
        <p className="font-bold text-[#1A44F7] ">ዓርብ የፍቅር ቀን</p>

        <div className="mt-2 flex gap-2">
          <FaFacebook className="text-xl text-slate-400 hover:text-[#1A44F7]" />
          <FaInstagramSquare className="text-xl text-slate-400 hover:text-[#1A44F7]" />
          <FaTelegram className="text-xl text-slate-400 hover:text-[#1A44F7]" />
          <FaTiktok className="text-xl text-slate-400 hover:text-[#1A44F7]" />
        </div>
      </div>
    </div>
  );
}

export default DayCard;
