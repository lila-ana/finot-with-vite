import {
  Table,
  Avatar,
  Tabs,
  Switch,
  TableColumnsType,
  Row,
  Col,
  Button,
} from "antd";
import {
  MemberDataType,
  useAttendanceStore,
} from "../../../../../store/ui/attendance";
import { useMemberAttendance } from "../../../../../store/server/attendance/queries";
import { TableProps } from "antd/lib";
import AttendanceSearchComponent from "../searchComponent";
import { useMarkAttendance } from "../../../../../store/server/attendance/mutation";
import dayjs from "dayjs";

const { TabPane } = Tabs;

const AttendanceTable: React.FC = () => {
  const {
    current,
    pageSize,
    selectedAttendance,
    setAttendance,
    setCurrent,
    setPageSize,
    validateAttendance,
  } = useAttendanceStore();

  const { data: memberAttendance, isLoading: responseLoading } =
    useMemberAttendance();

  const { mutate: markAttendance } = useMarkAttendance();

  const columns: TableColumnsType<MemberDataType> = [
    {
      title: "Member",
      dataIndex: "member",
      render: (_: unknown, record: MemberDataType) => (
        <div className="flex items-center gap-2">
          <Avatar>{record?.profileImage ?? record?.fullName?.charAt(0)}</Avatar>
          <div>
            <div className="font-semibold">{record?.fullName ?? "N/A"}</div>
            <div className="text-gray-500 text-xs">
              {record?.email ?? "N/A"}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Class level",
      dataIndex: "class",
    },
    {
      title: "Elder Name",
      dataIndex: "elder",
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => (a.date ?? "").localeCompare(b.date ?? ""),
    },
    {
      title: "Day",
      dataIndex: "day",
    },
    {
      title: "Attendance Approval",
      dataIndex: "action",
      render: (_: unknown, record: MemberDataType) => {
        const currentAttendance = memberAttendance?.items?.find((item: any) => {
          return (
            item?.member_id === record?.id &&
            dayjs(item?.attendances?.created_at).format("YYYY-MM-DD") ===
              dayjs().format("YYYY-MM-DD")
          );
        });

        const isChecked = currentAttendance?.attendances[0]?.attended ?? false;
        return (
          <Switch
            checked={isChecked}
            onChange={(checked) => {
              const newStatus = checked;

              setAttendance(
                record?.id,
                newStatus,
                record?.class ?? "",
                record?.elder ?? ""
              );

              markAttendance({
                member_id: record?.id,
                attended: newStatus,
                elder_id: record?.elder ?? "",
                class_id: record?.class ?? "",
              });

              selectedAttendance[record?.id] = newStatus;
            }}
          />
        );
      },
    },
  ];
  const currentDate = dayjs().format("YYYY-MM-DD"); // Format the date (YYYY-MM-DD)
  const currentDay = dayjs().format("dddd"); // Get the current day name (e.g., "Monday")

  const attendanceTableData =
    memberAttendance?.items?.map(
      (item: any): MemberDataType => ({
        id: item?.member_id ?? 0,
        fullName: item?.full_name ?? "N/A",
        email: item?.email_address ?? "N/A",
        date: item?.date ?? currentDate,
        day: item?.day ?? currentDay,
        class: item?.class_id ?? "184b6e1f-871b-465c-874f-21ee8e57691d",
        elder: item?.elder_id ?? "023a9057-af24-461c-bf47-44b1b2ce6619",
      })
    ) ?? [];

  const onPageChange = (page: number, pageSize?: number) => {
    setCurrent(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  const rowSelection: TableProps<MemberDataType>["rowSelection"] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: MemberDataType[]
    ) => {
      // Track which users are selected and their attendance status
      selectedRows.forEach((row) => {
        selectedAttendance[row?.id] = selectedAttendance[row?.id] ?? false;
      });
    },
    getCheckboxProps: (record: MemberDataType) => ({
      disabled: record.fullName === "Disabled User",
      name: record.fullName,
    }),
  };

  const bulkMarkAttendance = (status: boolean) => {
    Object.keys(selectedAttendance).forEach((id) => {
      markAttendance({
        member_id: id,
        attended: status,
        elder_id: "",
        class_id: "",
      });
      selectedAttendance[id] = status;
    });
  };

  const allPresent = Object.values(selectedAttendance).every(
    (status) => status
  );

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Validate Attendances" key="1">
          <Row
            gutter={[16, 16]}
            justify="space-between"
            className="items-center"
          >
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Button
                className="custom-button"
                onClick={() => bulkMarkAttendance(allPresent ? false : true)}
              >
                {allPresent ? "Mark All Absent" : "Mark All Present"}
              </Button>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <Row
                gutter={[16, 16]}
                justify="space-between"
                className="items-center"
              >
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <AttendanceSearchComponent />
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <AttendanceSearchComponent />
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <AttendanceSearchComponent />
                </Col>
              </Row>
            </Col>
          </Row>
          <Table
            columns={columns}
            dataSource={attendanceTableData}
            rowKey="key"
            loading={responseLoading}
            rowSelection={rowSelection}
            pagination={{
              total: memberAttendance?.meta?.totalPages,
              current: current,
              pageSize: pageSize,
              onChange: onPageChange,
              showSizeChanger: true,
              onShowSizeChange: onPageChange,
            }}
            scroll={{ x: 1000 }}
          />
          {/* <CustomPagination
            current={current}
            total={10}
            pageSize={pageSize}
            onChange={handleChange}
            onShowSizeChange={handleShowSizeChange}
          /> */}
        </TabPane>

        <TabPane tab="Validated Attendances" key="3">
          <p>Validated attendances will be displayed here.</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AttendanceTable;
