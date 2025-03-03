import { Card, Col, Row, Spin } from "antd";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { useGetEvents } from "../../../../../store/server/events/queries";
import placeholder from "../../../../../assets/image/photo.png";
import { BlogCardProps } from "../../../../../store/ui/events/interface";

const EventCards: React.FC<BlogCardProps> = ({
  description,
  capacity,
  event_type,
  event_name,
  organizer_name,
  contact_info,
  location,
  status,
}) => (
  <>
    <Card hoverable>
      <div className="h-full rounded-lg ">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={placeholder}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
            {event_type}
          </h2>
          <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
            {event_name}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>

          <div className="flex flex-col">
            <span className="uppercase text-slate-400">{organizer_name}</span>

            <p className="text-sm"> Organizer </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col items-start justify-center flex-wrap">
              <div>
                Status -{" "}
                <span className="uppercase text-slate-400">{status}</span>
              </div>
              <div>
                Address -{" "}
                <span className=" text-slate-400 font-light">
                  {contact_info}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="mr-3 inline-flex items-center gap-2 lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <CiLocationOn />
                <span className="text-slate-400"> {location}</span>
              </span>
              <span className="gap-2 inline-flex items-center leading-none text-sm">
                <MdOutlineReduceCapacity />
                <span className="text-gray-400 "> {capacity} limit</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </>
);

const DashBoardEventCard: React.FC = () => {
  const { data: events, isLoading: isResponseLoading } = useGetEvents();

  if (isResponseLoading)
    return (
      <div className="flex items-center justify-center h-64">
        <Spin />
      </div>
    );
  return (
    <section className="text-gray-600 body-font">
      {/* <div className="container px-5 py-24 mx-auto"> */}
      {/* <div className="flex flex-wrap -m-4"> */}
      <Row gutter={[16, 16]}>
        {events?.map((item: any, index: number) => (
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <EventCards key={index} {...item} />
          </Col>
        ))}
      </Row>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default DashBoardEventCard;
