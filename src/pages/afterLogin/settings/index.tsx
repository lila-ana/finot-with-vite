import React from "react";
import Layout from "../../../layout";
import CustomBreadcrumb from "../../../components/customBreadCrumb";

const Settings: React.FC = () => {
  return (
    <Layout dashboardProps={"Settings"}>
      <CustomBreadcrumb
        title="Settings"
        subtitle="Adjust system settings here"
      />
    </Layout>
  );
};

export default Settings;
