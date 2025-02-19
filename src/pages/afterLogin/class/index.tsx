import React from "react";
import Layout from "../../../layout";
import ClassTable from "./_components/classTable";
import CustomBreadcrumb from "../../../components/customBreadCrumb";
import { Button } from "antd";
import { useMemberStore } from "../../../store/ui/member";

const Class: React.FC = () => {
  const { setOpenDrawer } = useMemberStore();

  const handleOpen = () => {
    setOpenDrawer(true);
  };
  return (
    <Layout dashboardProps={"Classes"}>
      <CustomBreadcrumb
        title="Class"
        subtitle="classes organized by the church"
      />
      <div className="flex items-center justify-end gap-2 mt-4">
        <Button className="custom-button " onClick={handleOpen}>
          Create Class
        </Button>
      </div>
      <ClassTable />
    </Layout>
  );
};

export default Class;
