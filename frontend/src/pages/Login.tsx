import { Form, Input, Button, Spin } from "antd";
import { useUserStore } from "../stores/user/user.store";
import { Navigate, useNavigate } from "react-router-dom";
import { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";


interface LoginFormValues {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const navigation = useNavigate();
  const isLoading = useUserStore((state) => state.isLoading);
  const userLogin = useUserStore((state) => state.login);

  const onFinish = (values: LoginFormValues) => {
    userLogin(values);
    if (isLoading) {
      navigation("/");
    }
  };

  if (localStorage.getItem("tokenAuth")) {
    return <Navigate to="/" />;
  }

  return (
    <section className="landing-container">
      <div className="landing-card">
        <h1 className="landing-title">Sign in to your account</h1>
        <Form<LoginFormValues> name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item<LoginFormValues>
            label="Your email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" placeholder="name@example.com"  autoComplete="false"/>
          </Form.Item>
          <Form.Item<LoginFormValues>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 8, message: "Password must be at least 8 characters long!" }
            ]}
          >
            <Input.Password placeholder="••••••••"  autoComplete="false"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="landing-button">
              {isLoading ? <Spin indicator={<LoadingOutlined spin />} /> : "Login"}
            </Button>
          </Form.Item>
        </Form>
        <p className="ant-input landing-footer">
          New user? <a href="/register">Register</a>
        </p>
      </div>
    </section>
  );
};
