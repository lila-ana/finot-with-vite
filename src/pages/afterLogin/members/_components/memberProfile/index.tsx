import { Card, Col, Row } from "antd";
import React from "react";
import {
  FaEnvelopeOpen,
  FaHouseUser,
  FaMale,
  FaPhoneAlt,
  FaRing,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import {
  MdBloodtype,
  MdCastForEducation,
  MdContactEmergency,
  MdDateRange,
  MdOutlineMyLocation,
} from "react-icons/md";
import placeholder from "../../../../../assets/image/photo.png";
import dayjs from "dayjs";
import { useGetMemberById } from "../../../../../store/server/member/queries";
import CustomBreadcrumb from "../../../../../components/customBreadCrumb";
import { Link } from "react-router";
import { useParams } from "react-router-dom";
import Layout from "../../../../../layout";

const MembersProfile: React.FC = () => {
  const { id } = useParams();
  console.log(id, "this is id");
  const { data: singleMember } = useGetMemberById(id ?? "");
  console.log(singleMember, "singleMember");
  return (
    <Layout>
      <div className="h-auto w-full p-4">
        <Link to={"/dashboard/members"}>
          <div className="px-4 py-2 w-fit border text-primary border-primary rounded-md flex items-center gap-2 text-md font-light">
            <span className="text-sm font-light">
              <IoMdArrowRoundBack />
            </span>
            <span>Go back</span>
          </div>
        </Link>
        <CustomBreadcrumb
          title="Member Profile"
          subtitle="Selected church member profile detail"
        />

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card>
              <div className="flex  gap-4 md:flex-row flex-col">
                <div className="w-full max-w-sm bg-white border h-fit border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col items-center p-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={placeholder}
                      alt="member image"
                    />
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                      {singleMember?.member?.full_name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {singleMember?.member?.class_name || ""} Student
                    </span>
                    <div className="h-[1px] w-full bg-gray-200 my-4"></div>
                    <div>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <p className="text-sm text-slate-400">Phone Number</p>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <p className="font-semibold text-primary">
                            {singleMember?.member?.phone_number}
                          </p>
                        </Col>
                      </Row>

                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <p className="text-sm text-slate-400">
                            Last Attendance
                          </p>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <p className="font-semibold text-primary">
                            {singleMember?.updated_at
                              ? dayjs(singleMember?.member?.updated_at).format(
                                  "MMMM D, YYYY"
                                )
                              : ""}
                          </p>
                          <p className="text-sm text-slate-400">(24 Days)</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Card>
              <div className="flex flex-col gap-4 w-full ">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <h2 className="text-lg font-medium text-primary">
                      Personal Information
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <FaEnvelopeOpen className="text-primary mr-2" />
                      <p> {singleMember?.member?.email_address}</p>
                    </div>
                    <div className="flex items-center">
                      <FaPhoneAlt className="text-green-500 mr-2" />
                      <p> {singleMember?.member?.phone_number}</p>
                    </div>
                    <div className="flex items-center">
                      <FaMale className="text-primary mr-2" />
                      <p> {singleMember?.member?.gender}</p>
                    </div>
                    <div className="flex items-center">
                      <FaRing className="text-yellow-500 mr-2" />
                      <p> {singleMember?.member?.marital_status}</p>
                    </div>
                    <div className="flex items-center">
                      <MdDateRange className="text-primary mr-2" />
                      <p> {singleMember?.member?.date_of_birth}</p>
                    </div>
                    <div className="flex items-center">
                      <MdBloodtype className="text-red-500 mr-2" />
                      <p> {singleMember?.member?.blood_type}</p>
                    </div>
                    <div className="flex items-start">
                      <MdCastForEducation className="text-primary mr-2" />
                      <div className="flex flex-col">
                        <p className="text-sm text-slate-400">
                          {singleMember?.member?.profession_detail ??
                            "Professional detail unavailable"}
                        </p>
                        <p className="text-sm">Profession Detail Information</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold">Absenteeism: </p>{" "}
                      <p className="font-light text-red-500"> 4 days</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="bg-white rounded-lg shadow-md p-6 w-full">
                    <div className="flex items-center mb-4">
                      <h2 className="text-lg font-medium text-primary">
                        Address information
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <IoLocationSharp className="text-primary mr-2" />
                        <p>Addis Ababa</p>
                      </div>
                      <div className="flex items-center">
                        <FaHouseUser className="text-primary mr-2" />
                        <p>Kolfe Keranio, 062</p>
                      </div>
                      <div className="flex items-center p-4 bg-primary rounded-md w-fit text-secondary">
                        <MdOutlineMyLocation className="text-gray-500 mr-2" />
                        <p>Click Here to go to Google maps</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-t-8 border-red-400 rounded-b-lg shadow-md p-6 w-full">
                    <div className="flex items-center mb-4">
                      <h2 className="text-lg font-medium text-red-500">
                        Emergency Contact
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <MdContactEmergency className="text-red-500 mr-2 te" />
                        <div>
                          <div className="flex items-center justify-start gap-1">
                            <p>Name:</p>
                            <span className="text-sm text-red-400 font-light">
                              {singleMember?.member?.emergency_contact_name}
                            </span>
                          </div>
                          <div className="flex items-center justify-start gap-1">
                            <p>Phone Number:</p>
                            <span className="text-sm text-red-400 font-light">
                              {singleMember?.member?.emergency_contact_phone}
                            </span>
                          </div>
                          <div className="flex items-center justify-start gap-1">
                            <p>Relation:</p>
                            <span className="text-sm text-red-400 font-light">
                              {singleMember?.member
                                ?.emergency_contact_relation ??
                                "Relation not mentioned"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default MembersProfile;
