import React from "react";
import Layout from "../../../layout";
import { Button } from "antd";
import MemberDrawer from "./_components/memberDrawer";
import MembersTable from "./_components/memberTable";
import CustomBreadcrumb from "../../../components/customBreadCrumb";
import ImportMemberDrawer from "./_components/importMemberDrawer";
import { useMemberStore } from "../../../store/ui/member";

const Members: React.FC = () => {
  const { setOpenDrawer, setImportDrawer } = useMemberStore();

  const handleOpen = () => {
    setOpenDrawer(true);
  };
  const handleImportDrawer = () => {
    setImportDrawer(true);
  };
  return (
    <Layout dashboardProps={"Members"}>
      <CustomBreadcrumb title="Member" subtitle="Manage church members" />
      <div className="flex items-center justify-end gap-2 mt-4">
        <Button className="custom-button " onClick={handleOpen}>
          Create Member
        </Button>
        <Button onClick={handleImportDrawer} className="custom-white-button">
          Import Member
        </Button>
      </div>
      <MemberDrawer />
      <ImportMemberDrawer />
      <MembersTable />
    </Layout>
  );
};

export default Members;
