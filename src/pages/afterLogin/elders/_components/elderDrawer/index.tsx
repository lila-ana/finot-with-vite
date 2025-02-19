import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Elder } from "../../../../../store/ui/elders/interface";
import {
  useCreateElders,
  useUpdateElders,
} from "../../../../../store/server/elder/mutation";
import CustomDrawerLayout from "../../../../../components/customDrawer";
import { useElderStore } from "../../../../../store/ui/elders";

const EldersDrawer: React.FC = () => {
  const [form] = Form.useForm();
  const { openDrawer, currentElder, setOpenDrawer } = useElderStore();

  const { mutate: createElder, isPending: isCreateLoading } = useCreateElders();

  const { mutate: updateElder, isPending: isUpdateLoading } = useUpdateElders();

  const handleSubmit = (values: Elder) => {
    if (currentElder && currentElder.id) {
      updateElder({ data: { ...values }, id: currentElder?.id });
    } else {
      createElder(values);
      setOpenDrawer(false);
    }
  };

  const customHeader = (
    <div className="flex justify-center text-xl font-extrabold text-gray-800 p-4">
      {currentElder ? "Edit Elder" : "Add Elder"}
    </div>
  );

  return (
    <div>
      <CustomDrawerLayout
        modalHeader={customHeader}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width="40%"
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={
            currentElder || {
              name: "",
              email: "",
              phone: "",
              address: "",
              contact_info: "",
              position: "",
              bio: "",
            }
          }
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
              <Form.Item
                name="name"
                label={
                  <span className="text-sm font-semibold text-gray-700">
                    Full Name
                  </span>
                }
                rules={[{ required: true, message: "Please enter the name" }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
                name="position"
                label={
                  <span className="text-sm font-semibold text-gray-700">
                    Position
                  </span>
                }
              >
                <Input placeholder="Enter position" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                name="email"
                label={
                  <span className="text-sm font-semibold text-gray-700">
                    Email
                  </span>
                }
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="Enter email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                name="phone"
                label={
                  <span className="text-sm font-semibold text-gray-700">
                    Phone
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid phone number",
                  },
                ]}
              >
                <Input type="phone" placeholder="Enter phone" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="address"
            label={
              <span className="text-sm font-semibold text-gray-700">
                Address
              </span>
            }
          >
            <Input placeholder="Enter address" />
          </Form.Item>

          <Form.Item
            name="bio"
            label={
              <span className="text-sm font-semibold text-gray-700">Bio</span>
            }
          >
            <TextArea rows={4} placeholder="Enter bio" />
          </Form.Item>

          {/* <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {currentElder ? "Update" : "Create"}
            </Button>
          </Form.Item> */}

          <Form.Item>
            <div className="flex justify-center w-full bg-[#fff] px-9 py-6 gap-6">
              <Button
                ghost
                id="CloseDrawer"
                onClick={() => setOpenDrawer(false)}
                className="custom-cancel custom-cancel-bg"
              >
                Close
              </Button>
              <Button
                loading={isCreateLoading || isUpdateLoading}
                id="create_member"
                htmlType="submit"
                className="custom-button"
              >
                {currentElder ? "Update" : "Create"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </CustomDrawerLayout>
    </div>
  );
};

export default EldersDrawer;
