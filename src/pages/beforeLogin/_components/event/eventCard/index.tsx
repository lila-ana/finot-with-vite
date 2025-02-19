import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

interface EventCardParams {
  title: string;
  imageLink: string;
  location: string;
  subtitle?: string;
}

const EventCard: React.FC<EventCardParams> = (props) => {
  return (
    <div className="flex gap-4 mt-4 ">
      <div className="md:w-64 bg-white hover:shadow-lg  rounded-xl w-full  ">
        <img
          src={props?.imageLink}
          width={200}
          height={160}
          alt="event Showcase"
          className="w-full h-40 rounded-t-lg abso bg-gray-200 object-cover"
        />
        <div className="px-4 py-2">
          <p className="font-bold text-sm mt-1">{props?.title}</p>
          <p className="text-xs text-slate-400 text-wrap">{props?.subtitle}</p>
          <div className="flex gap-2 items-center mt-4">
            <FaRegCalendarAlt className="text-[#1A44F7]" />
            <p className="text-sm">ሐሙስ 16/12/2016 ዓ.ም</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLocationOutline className="text-[#1A44F7]" />
            <p className="text-sm">Ayertena Kidanmhehret</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
