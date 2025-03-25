import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "antd";
import { AppMenu } from "../AppMenu";
import { useUserStore } from "../../stores/user/user.store";
import { useEffect } from "react";

const { Content } = Layout;

export const AppLayout = () => {

  const { checkHealth } = useUserStore();
  useEffect(() => {
    checkHealth();
  }, []);

  if (!localStorage.getItem("tokenAuth")) return <Navigate to="/login" />;

  return (
    <Layout className="app-layout">
      <AppMenu />
      <Content className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
