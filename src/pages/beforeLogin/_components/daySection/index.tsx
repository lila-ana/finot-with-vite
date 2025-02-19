import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";
import DayCard from "./dayCard";

function DaysSection() {
  return (
    <div className="bg-gradient-to-r flex-col mt-6 md:flex-row mx-4 from-[#1A44F7] to-blue-800 md:h-96 md:p-24 lg:mx-40 flex items-center justify-between rounded-lg px-4">
      <div className="flex flex-col gap-2 md:w-1/2 py-4 ">
        <p className="text-xl md:text-3xl font-bold text-yellow-300 ">
          ዓርብ የፍቅር ቀን
        </p>
        <p className="text-sm md:text-lg text-white">
          ፍቅር ይታገሣል፥ ቸርነትንም ያደርጋል፤ ፍቅር አይቀናም፤ ፍቅር አይመካም፥ አይታበይም...
          <br />1 ኛ ቆሮ 13:4-7
        </p>
        <div className="flex gap-4 items-center text-white">
          <IoArrowBackCircleOutline className="text-3xl" />
          <p>To the Next Item</p>
          <IoArrowForwardCircleOutline className="text-3xl" />
        </div>
      </div>
      <DayCard />
    </div>
  );
}

export default DaysSection;
