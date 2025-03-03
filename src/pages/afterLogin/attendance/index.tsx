import React from "react";
import CustomBreadcrumb from "../../../components/customBreadCrumb";
import Layout from "../../../layout";
import AttendanceTable from "./components/attendanceTable";

const Attendance: React.FC = () => {
  const handleOpen = () => {
    // TODO: Implement drawer to create member
  };

  return (
    <Layout dashboardProps={"Attendance"}>
      <CustomBreadcrumb
        title="Attendance"
        subtitle="Record attendance of members on daily basis"
      />
      <div className="flex items-center justify-end gap-2 mt-4"></div>
      <AttendanceTable />
    </Layout>
  );
};

export default Attendance;
