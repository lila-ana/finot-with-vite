import React from "react";
import EventCard from "../eventCard";
import { useGetEvents } from "../../../../../store/server/events/queries";

const EventSection: React.FC = () => {
  const { data: events, isLoading: responseLoading, isError } = useGetEvents();

  return (
    <div className=" bg-gradient-to-br from-[#F7D407] to-yellow-500 p-4 flex flex-col rounded-xl mx-4 lg:mx-40 my-24">
      <div className="flex flex-col px-2 border-l-2 border-black">
        <p className="text-2xl font-bold">የቤተ ክርስቲያን ፕሮግራሞች</p>
        <p className="text-sm">
          ሰው በእግዚአብሔር አፍ በሚወጣ ቃል ኹሉ እንጂ በእንጀራ ብቻ አይኖርም።
          <br /> ማቴ 4፥4
        </p>
      </div>
      {responseLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>Error Fetching data...</p>
      ) : (
        <div className="flex gap-4 flex-col md:flex-row  ">
          {events && events.length ? (
            events?.map((item: any, index: number) => {
              return (
                <EventCard
                  key={index}
                  title={item?.attributes?.title}
                  imageLink={item?.attributes?.imageLink}
                  location={item?.attributes?.location}
                  subtitle={item?.attributes?.subtitle}
                />
              );
            })
          ) : (
            <div className="m-8">
              <p className="text-sm font-light ">
                An event haven't been booked yet...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventSection;
