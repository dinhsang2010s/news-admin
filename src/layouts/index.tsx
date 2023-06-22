import { Button, Input, Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  InsertRowBelowOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
import "./styles.less";
import { Link, Outlet } from "react-router-dom";

const menu = [
  {
    key: "dashboard",
    icon: (
      <DashboardOutlined className="menu-icon" style={{ color: "#8f5fe8" }} />
    ),
    label: "Dashboard",
  },
  {
    key: "user",
    icon: (
      <SolutionOutlined className="menu-icon" style={{ color: "#00d25b" }} />
    ),
    label: "User",
  },
  {
    key: "category",
    icon: (
      <InsertRowBelowOutlined
        className="fa-solid fa-table-list menu-icon"
        style={{ color: "#fc424a" }}
      />
    ),
    label: "Category",
  },
];

export const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="main">
      <Header className="header-component">
        <div className="logo">
          <img src="./logo.8d2895f5.svg" alt="" />
        </div>
        <div className="nav-header">
          <Button
            className="btn-collapsed"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Input className="search-header" placeholder="Search" />
          <div className="div">adasdsa</div>
        </div>
      </Header>
      <Layout>
        <Sider
          className="sider-component"
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={245}
        >
          <Menu
            className="menu-component"
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["/"]}
          >
            {menu.map((m) => (
              <Menu.Item className="menu-item" key={m.key} icon={m.icon}>
                <Link className="link-item" to={m.key}>
                  {m.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content className="content-component">
            <Outlet />
          </Content>
          <Footer className="footer-component">
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
