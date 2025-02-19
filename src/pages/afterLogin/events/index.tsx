import React from "react";
import Layout from "../../../layout";
import DashBoardEventCard from "./_components/eventCards";
import CustomBreadcrumb from "../../../components/customBreadCrumb";
import { Button } from "antd";
import { useEventStore } from "../../../store/ui/events";
import EventForm from "./_components/eventDrawer";

const Events: React.FC = () => {
  const { setOpenDrawer } = useEventStore();

  const handleOpen = () => {
    setOpenDrawer(true);
  };
  return (
    <Layout dashboardProps={"Events"}>
      <CustomBreadcrumb title="Events" subtitle="Manage church events here" />
      <div className="flex items-center justify-end gap-2 mt-4">
        <Button className="custom-button " onClick={handleOpen}>
          Create Event
        </Button>
      </div>
      <DashBoardEventCard />
      <EventForm />
    </Layout>
  );
};

export default Events;
