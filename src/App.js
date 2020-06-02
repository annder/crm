import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

const SibarItems = [
  {
    title: '管理系统',
    children: [
      {
        title: '部门管理',
      },
      {
        title: '权限管理',
      },
      {
        title: '角色管理',
      },
    ],
  },
  {
    title: '1',
  },
];

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

const MainContent = () => (
  <Layout style={{ padding: '0 24px 24px' }}>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <RouterConfig />
    </Content>
  </Layout>
);
const SibarMenu = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {SibarItems.map((element, index) =>
        element.children ? (
          <SubMenu key={index} title={element.title}>
            {element.children
              ? element.children.map((subItem, subIndex) => (
                  <Menu.Item key={subIndex}>{subItem.title}</Menu.Item>
                ))
              : null}
          </SubMenu>
        ) : (
          <Menu.Item key={index}>{element.title}</Menu.Item>
        )
      )}
    </Menu>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
          </Header>
          <Layout className="layout-main">
            <Sider width={200} className="site-layout-background">
              <SibarMenu />
            </Sider>
            <MainContent />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
