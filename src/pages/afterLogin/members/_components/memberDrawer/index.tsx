import { Col, DatePicker, Form, Radio, Row, Select } from "antd";
import React from "react";
import CustomDrawerLayout from "../../../../../components/customDrawer";
import CustomDrawerHeader from "../../../../../components/customDrawer/customDrawerHeader";
import { useMemberStore } from "../../../../../store/ui/member";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

const MemberDrawer: React.FC = () => {
  const { openDrawer, setOpenDrawer } = useMemberStore();

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <CustomDrawerLayout
      open={openDrawer}
      onClose={handleClose}
      modalHeader={
        <CustomDrawerHeader className="flex justify-center ">
          <span>Add Member</span>
        </CustomDrawerHeader>
      }
      footer={null}
      width="600px"
    >
      <Form layout="vertical">
        <Row gutter={[16, 5]}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Full Name
                </span>
              }
              name="full_name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Gender
                </span>
              }
              name="gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Date of birth
                </span>
              }
              name="date_of_birth"
              rules={[
                {
                  required: true,
                  message: "Please select your date of birth",
                },
              ]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Blood Type
                </span>
              }
              name="blood_type"
              rules={[
                { required: true, message: "Please select your blood type" },
              ]}
            >
              <Select placeholder="Select your blood type">
                <Select.Option value="A+">A+</Select.Option>
                <Select.Option value="A-">A-</Select.Option>
                <Select.Option value="B+">B+</Select.Option>
                <Select.Option value="B-">B-</Select.Option>
                <Select.Option value="AB+">AB+</Select.Option>
                <Select.Option value="AB-">AB-</Select.Option>
                <Select.Option value="O+">O+</Select.Option>
                <Select.Option value="O-">O-</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Marital Status
                </span>
              }
              name="marital_status"
              rules={[
                {
                  required: true,
                  message: "Please select your marital status",
                },
              ]}
            >
              <Select placeholder="Select your marital status">
                <Select.Option value="single">Single</Select.Option>
                <Select.Option value="married">Married</Select.Option>
                <Select.Option value="divorced">Divorced</Select.Option>
                <Select.Option value="widowed">Widowed</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">Address</span>
          }
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input />
        </Form.Item>

        <Row gutter={[16, 8]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Phone Number
                </span>
              }
              name="phone_number"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Email Address
                </span>
              }
              name="email_address"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input placeholder="Enter you email address" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Membership Status
                </span>
              }
              name="membership_status"
              rules={[
                {
                  required: true,
                  message: "Please select membership status",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="active">Active</Radio>
                <Radio value="inactive">Inactive</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Date of Baptism
                </span>
              }
              name="date_of_baptism"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Elder
                </span>
              }
              name="elder_id"
              rules={[
                {
                  required: true,
                  message: "Please select your class Elder ",
                },
              ]}
            >
              <Select placeholder="Select your class elder">
                {/* {elders?.map((item: any) => (
                  <Select.Option key={item?.elder_id} value={item?.elder_id}>
                    {item?.name}
                  </Select.Option>
                ))} */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={
                <span className="text-sm font-semibold text-gray-700">
                  Class
                </span>
              }
              name="class_id"
              rules={[
                {
                  required: true,
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
          </Col>
        </Row>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">
              Previous Church Affiliation
            </span>
          }
          name="previous_church_affiliation"
        >
          <Input placeholder="Previous church affiliation" />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">
              Family Members
            </span>
          }
          name="family_members"
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item label="Children Info" name="children_info">
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">
              Areas of Interest
            </span>
          }
          name="areas_of_interest"
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">
              Spiritual Gifts
            </span>
          }
          name="spiritual_gifts"
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">
              Emergency Contact Name
            </span>
          }
          name="emergency_contact_name"
          rules={[
            {
              required: true,
              message: "Please enter an emergency contact name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-sm font-semibold text-gray-700">
              Emergency Contact Phone
            </span>
          }
          name="emergency_contact_phone"
          rules={[
            {
              required: true,
              message: "Please enter an emergency contact phone",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </CustomDrawerLayout>
  );
};

export default MemberDrawer;
