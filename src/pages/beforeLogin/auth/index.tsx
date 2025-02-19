import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router";
import kidye from "../../../assets/image/login.png";
import LandingPageHeader from "../_components/landingPageHeader";
import { useLogin } from "../../../store/server/auth/mutation";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  //   const router = useRouter();
  const navigate = useNavigate();

  const { mutate: login, isPending: LoginPending } = useLogin();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        login(values, {
          onSuccess: (data) => {
            console.log(data, "this is data");

            if (data?.access_token) {
              localStorage.setItem("access_token", data?.access_token);
              navigate("/dashboard/members");
            } else {
              console.warn("No member found, redirect not performed");
            }
          },
        });
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  return (
    <div className="w-full">
      <LandingPageHeader />
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <Form
                form={form}
                onFinish={handleSubmit}
                className="space-y-4 md:space-y-6"
              >
                <Form.Item
                  name="email"
                  label="Your email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <Input.Password
                    placeholder="••••••••"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item className="flex items-center justify-between">
                  <Checkbox className="text-gray-500 dark:text-gray-300">
                    Remember me
                  </Checkbox>
                  <Link
                    to="#"
                    className="text-sm font-medium text-[#4ca696] hover:underline dark:text-[#4ca696]"
                  >
                    Forgot password?
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    loading={LoginPending}
                    type="primary"
                    htmlType="submit"
                    className="w-full font-medium rounded-lg"
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <img
        src={kidye}
        alt="loginKidye"
        className="h-full absolute object-contain hidden md:block object-right-top right-0 top-0 -z-10"
      />
    </div>
  );
};

export default Login;
