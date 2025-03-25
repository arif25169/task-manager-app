import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, Drawer, Popconfirm } from "antd";
import { MenuOutlined } from "@ant-design/icons";


const { Header } = Layout;

export const AppMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);


  return (
    <Header style={{ background: "#fff", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div className="menu-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img src="https://okkhor.org/static/5b256bdd5bdde2f72a6cf3a41f89c8c9/08466/profile-pic.jpg" alt="Okkhor Logo" className="logo-img" />
          <span className="logo-text">Task Manager</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="logout" >
              <Popconfirm
                title="Are you sure?"
                onConfirm={() => {
                  localStorage.removeItem("tokenAuth");
                  navigate("/login");
                }}
                okText="Log Out"
                cancelText="No"
                okButtonProps={{ danger: true }}
              >
                <span>Log Out</span>
              </Popconfirm>
            </Menu.Item>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <Button type="text" icon={<MenuOutlined />} onClick={toggleMenu} className="mobile-menu-button" />

        {/* Mobile Drawer */}
        <Drawer title="Menu" placement="right" onClose={toggleMenu} open={isMenuOpen}>
          <Menu mode="vertical">
            <Menu.Item key="home">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="marketplace">
              <a href="/about">Marketplace</a>
            </Menu.Item>
            <Menu.Item key="logout" >
              <Popconfirm
                title="Are you sure?"
                onConfirm={() => {
                  localStorage.removeItem("tokenAuth");
                  navigate("/login");
                }}
                okText="Log Out"
                cancelText="No"
                okButtonProps={{ danger: true }}
              >
                <span>Log Out</span>
              </Popconfirm>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
};
