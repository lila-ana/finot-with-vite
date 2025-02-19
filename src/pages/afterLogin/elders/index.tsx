import React from "react";
import Layout from "../../../layout";
import ElderCard from "./_components/elderCard";
import CustomBreadcrumb from "../../../components/customBreadCrumb";
import { Button } from "antd";
import ElderDrawer from "./_components/elderDrawer";
import { useElderStore } from "../../../store/ui/elders";

const Elders: React.FC = () => {
  const { setOpenDrawer } = useElderStore();
  const handleOpen = () => {
    setOpenDrawer(true);
  };
  return (
    <Layout dashboardProps={"Elders"}>
      <CustomBreadcrumb
        title="Elders"
        subtitle="Manage elders assigned for each class"
      />
      <div className="flex items-center justify-end gap-2 mt-4">
        <Button className="custom-button " onClick={handleOpen}>
          Create Elder
        </Button>
      </div>
      <ElderCard />
      <ElderDrawer />
    </Layout>
  );
};

export default Elders;
