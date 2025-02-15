import { Button, Select, Table, TableColumnsType } from "antd";
import React from "react";
import { useGetMembers } from "../../../../../store/server/member/queries";
import { Member } from "../../../../../store/server/member/interface";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { Pencil, Trash2 } from "lucide-react";

const MembersTable: React.FC = () => {
  const { data: memberData, isLoading: responseLoading } = useGetMembers();

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
      title: "Gender",
      dataIndex: "gender",
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

  const membersTableData = memberData?.map((item: any) => ({
    key: item?.member_id ?? "unknown",
    id: item?.unique_identifier ?? "unknown",
    full_name: item?.full_name ?? "unknown",
    phone_number: item?.phone_number ?? "unknown",
    gender: item?.gender ?? "unknown",
    view_profile: (
      <Link to={`members/${item?.id}`}>
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
        {/* <Select
          placeholder="Status"
          allowClear
          onChange={(value) => handleStageChange(value, item?.id)}
        >
          {AttendanceStatus &&
            Object?.values(AttendanceStatus).map((type) => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
        </Select> */}
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
      />
    </div>
  );
};

export default MembersTable;
