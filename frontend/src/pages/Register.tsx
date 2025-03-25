import { Form, Input, Button } from "antd";
import { useUserStore } from "../stores/user/user.store";
import { FC } from "react";

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
}

export const Register: FC = () => {
    const userRegister = useUserStore((state) => state.register);
    const [form] = Form.useForm();
    const onFinish = (values: RegisterFormValues) => {
        userRegister(values);
        form.resetFields();
    };

    return (
        <section className="landing-container">
            <div className="landing-card">
                <h1 className="landing-title">Create your account</h1>
                <Form<RegisterFormValues> name="register" layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item<RegisterFormValues>
                        label="Full Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter your name!" }]}
                    >
                        <Input placeholder="John Doe"  autoComplete="false"/>
                    </Form.Item>
                    <Form.Item<RegisterFormValues>
                        label="Your email"
                        name="email"
                        rules={[{ required: true, message: "Please enter your email!" }]}
                    >
                        <Input type="email" placeholder="name@example.com"  autoComplete="false"/>
                    </Form.Item>
                    <Form.Item<RegisterFormValues>
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please enter your password!" },
                            { min: 8, message: "Password must be at least 8 characters long!" }
                          ]}
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="landing-button">
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
                <p className="ant-input landing-footer ">
                    Already registered? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
};
