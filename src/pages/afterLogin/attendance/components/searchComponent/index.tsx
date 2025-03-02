import { Avatar, Select, Spin } from "antd";
import React from "react";
import { useGetMembers } from "../../../../../store/server/member/queries";
import { UserOutlined } from "@ant-design/icons";

const AttendanceSearchComponent: React.FC = () => {
  const { data: memberData, isLoading: responseLoading } = useGetMembers();

  console.log(memberData, "memberDatainserach");
  const renderEmployeeOption = (option: any) => (
    <div className="flex items-center justify-start gap-2 ">
      <div>
        {option?.profile_picture ? (
          <Avatar size={20} src={option?.profile_picture} />
        ) : (
          <Avatar size={20}>{option?.full_name[0]?.toUpperCase()}</Avatar>
        )}
      </div>
      {option?.full_name}
    </div>
  );

  const customTagRender = (props: any) => {
    const { label, closable, onClose } = props;
    return (
      <div className="flex gap-1 items-center bg-gray-100 p-2 rounded-lg mx-1 my-1 ">
        <Avatar size={20} icon={<UserOutlined />} />
        <span>{label}</span>
        {closable && (
          <span onClick={onClose} className="text-black text-xs cursor-pointer">
            ✖
          </span>
        )}
      </div>
    );
  };
  return (
    <div className="my-5">
      <Select
        mode="multiple"
        allowClear
        placeholder="Select Members"
        optionLabelProp="label"
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label as string)?.toLowerCase().includes(input.toLowerCase())
        }
        className=" w-full"
        tagRender={customTagRender}
      >
        {responseLoading ? (
          <Spin size="small" />
        ) : (
          memberData?.items.map((option: any) => (
            <Select.Option
              key={option?.id}
              value={option?.id}
              label={option?.full_name}
            >
              {renderEmployeeOption(option)}
            </Select.Option>
          ))
        )}
      </Select>
    </div>
  );
};

export default AttendanceSearchComponent;
