import React from "react";
import Layout from "../../../layout";
import CustomBreadcrumb from "../../../components/customBreadCrumb";

const DashBoard: React.FC = () => {
  return (
    <Layout dashboardProps={"DashBoard"}>
      {" "}
      <CustomBreadcrumb
        title="DashBoard"
        subtitle="Expressing the system figuratively"
      />
    </Layout>
  );
};

export default DashBoard;
