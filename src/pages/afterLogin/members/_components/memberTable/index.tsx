import { Button, Select, Table, TableColumnsType } from "antd";
import React from "react";
import { useGetMembers } from "../../../../../store/server/member/queries";
import { Member } from "../../../../../store/server/member/interface";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { Pencil, Trash2 } from "lucide-react";
// import { useSendAttendance } from "../../../../../store/server/attendance/mutation";

enum AttendanceStatus {
  PRESENT = "Present",
  ABSENT = "Absent",
}
const MembersTable: React.FC = () => {
  const { data: memberData, isLoading: responseLoading } = useGetMembers();
  console.log(memberData, "memberData");
  // const { mutate: sendAttendance } = useSendAttendance();

  const columns: TableColumnsType<Member> = [
    {
      title: "ID",
      dataIndex: "id",
      ellipsis: true,
    },
    {
      title: "Full Name",
      dataIndex: "full_name",
      sorter: (a, b) => a.full_name.localeCompare(b.full_name),
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Blood Type",
      dataIndex: "blood_type",
    },
    {
      title: "View Profile",
      dataIndex: "view_profile",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  // const handleStageChange = (value: string, memberId: string) => {
  //   console.log(value, memberId, "value this");
  //   sendAttendance({
  //     userId: memberId,
  //     status: value === "Present" ? true : false,

  //     // member_id: selectedMember?.member_id,
  //     // elder_id: selectedMember?.elder?.elder_id,
  //     // class_id: selectedMember?.class?.class_id,
  //     // attended: value === "Present" ? true : false,
  //   });
  // };

  console.log(memberData, "memberData");
  const membersTableData = memberData?.items?.map((item: any) => ({
    key: item?.member_id ?? "unknown",
    id: item?.unique_identifier ?? "unknown",
    full_name: item?.full_name ?? "unknown",
    phone_number: item?.phone_number ?? "unknown",
    email: item?.email_address ?? "unknown",
    gender: item?.gender ?? "unknown",
    blood_type: item?.blood_type ?? "unknown",
    view_profile: (
      <Link to={`${item?.member_id}`}>
        <Button
          id={`viewProfileButton${item?.id}`}
          className="bg-sky-600 px-[10px] text-white disabled:bg-gray-400 border-none"
        >
          <FaEye />
          <span className="text-xs font-normal">View profile</span>
        </Button>
      </Link>
    ),
    action: (
      <div className="flex gap-2">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-[#4ca696] w-7 h-7 rounded-md flex items-center justify-center">
            <Pencil
              size={15}
              className="text-white cursor-pointer"
              // onClick={() => handleOpenEditModal(item)}
            />
          </div>
          <div className="bg-[#e03137] w-7 h-7 rounded-md flex items-center justify-center">
            <Trash2
              size={15}
              className="text-white cursor-pointer"
              // onClick={() => handleOpenDeleteModal(item)}
            />
          </div>
        </div>
      </div>
    ),
  }));
  return (
    <div className="mt-5">
      <Table
        columns={columns}
        dataSource={membersTableData}
        loading={responseLoading}
        // pagination={8}
      />
    </div>
  );
};

export default MembersTable;
