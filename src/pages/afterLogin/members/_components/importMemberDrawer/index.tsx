import { Button, Form, Select, Upload } from "antd";
import React from "react";
import CustomDrawerLayout from "../../../../../components/customDrawer";
import CustomDrawerHeader from "../../../../../components/customDrawer/customDrawerHeader";
import { MdOutlineUploadFile } from "react-icons/md";
import { useImportMembers } from "../../../../../store/server/member/mutation";
import NotificationMessage from "../../../../../components/notification/notificationMessage";
import { useMemberStore } from "../../../../../store/ui/member";

const ImportMemberDrawer: React.FC = () => {
  const [form] = Form.useForm();
  const { openImportDrawer, setImportDrawer, file, setFile } = useMemberStore();

  const { mutate: submitImportedData } =
    useImportMembers();

  const handleClose = () => {
    setImportDrawer(false);
    setFile(null);
  };

  const handleSubmit = async () => {
    if (!file) {
      NotificationMessage.error({
        message: "Please upload a file before submitting.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log(formData, file, "formData");
    console.log("File appended to FormData:", formData.get("file"));

    submitImportedData(formData, {
      onSuccess: () => {
        form.resetFields();
        setImportDrawer(false);
      },
    });
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file: any) => {
      setFile(file);
      return false;
    },
    onRemove: () => {
      setFile(null);
    },
  };
  return (
    <CustomDrawerLayout
      open={openImportDrawer}
      onClose={handleClose}
      modalHeader={
        <CustomDrawerHeader className="flex justify-center ">
          <span>Import Member</span>
        </CustomDrawerHeader>
      }
      footer={null}
      width="600px"
    >
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item>
          <Upload.Dragger
            {...uploadProps}
            className="w-full p-6"
            showUploadList
          >
            <span className="flex flex-col gap-3 py-8">
              <p className="text-lg font-semibold">
                Drag & Drop here to upload
              </p>
              <p className="text-gray-500">Or select file from your computer</p>
              <span className="flex items-center justify-center my-3">
                <Button className="gap-3 button-bg w-fit border-none rounded-lg">
                  <MdOutlineUploadFile fill="white" />
                  <span className=" flex items-center justify-center text-md font-normal text-white">
                    Upload file
                  </span>
                </Button>
              </span>
            </span>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item
          label={
            <span className="text-xs font-semibold text-gray-700">Elder</span>
          }
          name="elder_id"
          rules={[
            {
              // required: true,
              message: "Please select your class Elder ",
            },
          ]}
        >
          <Select placeholder="Select your class elder" size="large">
            {/* {elders?.map((item: any) => (
                  <Select.Option key={item?.elder_id} value={item?.elder_id}>
                    {item?.name}
                  </Select.Option>
                ))} */}
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">Class</span>
          }
          name="class_id"
          rules={[
            {
              // required: true,
              message: "Please select your current class ",
            },
          ]}
        >
          <Select placeholder="Select your class">
            {/* {classes?.classes?.map((item: any) => (
                  <Select.Option key={item?.class_id} value={item?.class_id}>
                    {item?.class_name}
                  </Select.Option>
                ))} */}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </CustomDrawerLayout>
  );
};

export default ImportMemberDrawer;
