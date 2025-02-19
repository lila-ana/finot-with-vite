import React, { useEffect } from "react";
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Row,
  Col,
  Upload,
} from "antd";
import dayjs from "dayjs";

import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import {
  useCreateEvents,
  useUpdateEvents,
} from "../../../../../store/server/events/mutation";
import { useEventStore } from "../../../../../store/ui/events";
import { useGetEventById } from "../../../../../store/server/events/queries";
import CustomDrawerLayout from "../../../../../components/customDrawer";

const EventForm: React.FC = () => {
  const [form] = Form.useForm();
  const { openDrawer, selectedEventId, currentEvent, setOpenDrawer } =
    useEventStore();
  const { mutate: createEvent } = useCreateEvents();
  const { mutate: updateEvent } = useUpdateEvents();

  const { data: event } = useGetEventById(selectedEventId || "");

  useEffect(() => {
    if (event) {
      form.setFieldsValue({
        ...event,
        event_date: dayjs(event.event_date),
        event_time: dayjs(event.event_time, "HH:mm"),
      });
    } else {
      form.resetFields();
    }
  }, [event, form]);

  const handleFinish = (values: any) => {
    const formData = new FormData();
    formData.append("event_name", values.event_name);
    formData.append("event_date", values.event_date.format("YYYY-MM-DD"));
    formData.append("event_time", values.event_time.format("HH:mm"));
    formData.append("location", values.location);
    formData.append("description", values.description);

    if (values.image) {
      formData.append("image", values.image.file.originFileObj);
    }

    if (selectedEventId) {
      updateEvent({ id: selectedEventId, data: formData });
    } else {
      createEvent(formData);
      form.resetFields();
    }
    setOpenDrawer(false);
  };

  const customHeader = (
    <div className="flex justify-center text-xl font-extrabold text-gray-800 p-4">
      {selectedEventId ? "Edit Event" : "Create Event"}
    </div>
  );

  console.log(openDrawer, "openDrawer");

  return (
    openDrawer && (
      <CustomDrawerLayout
        modalHeader={customHeader}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width="40%"
        footer={null}
      >
        <Form form={form} onFinish={handleFinish} layout="vertical">
          <Form.Item
            name="event_name"
            label={
              <span className="text-sm font-semibold text-gray-700">
                Event Name
              </span>
            }
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter event name" />
          </Form.Item>
          <Row gutter={[16, 8]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Form.Item
                name="event_date"
                label={
                  <span className="text-sm font-semibold text-gray-700">
                    Event Date
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter a valid date" },
                ]}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                name="event_time"
                label={
                  <span className="text-sm font-semibold text-gray-700">
                    Event Time
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter a valid time" },
                ]}
              >
                <TimePicker format="HH:mm" className="w-full" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="location"
            label={
              <span className="text-sm font-semibold text-gray-700">
                Location
              </span>
            }
            rules={[
              { required: true, message: "Please enter a valid location" },
            ]}
          >
            <Input placeholder="Enter location" />
          </Form.Item>
          <Form.Item
            name="description"
            label={
              <span className="text-sm font-semibold text-gray-700">
                Description
              </span>
            }
          >
            <TextArea rows={4} placeholder="Enter event description here" />
          </Form.Item>
          <Form.Item
            name="image"
            label={
              <span className="text-sm font-semibold text-gray-700">
                Event Image
              </span>
            }
            valuePropName="file"
          >
            <Upload
              beforeUpload={() => false}
              onChange={({ file, fileList }) => {
                form.setFieldsValue({ image: fileList });
              }}
              maxCount={1}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <div className="flex justify-center w-full bg-[#fff] px-9 py-6 gap-6">
              <Button
                ghost
                id="CloseDrawer"
                onClick={() => setOpenDrawer(false)}
                className="custom-cancel"
              >
                Close
              </Button>
              <Button
                className="custom-button"
                id="create_member"
                htmlType="submit"
              >
                {currentEvent ? "Update" : "Create"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </CustomDrawerLayout>
    )
  );
};

export default EventForm;
