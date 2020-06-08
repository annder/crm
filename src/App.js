import React from 'react'
import './App.css'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '~/Home/Home'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
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
    title: '数据管理',
    children: [{ title: '数据字典目录' }, { title: '字典明细' }],
  },
  {
    title: '客户管理',
    children: [
      { title: '客户表' },
      { title: '客户状态' },
      { title: '客户关系' },
    ],
  },
  {
    title: '报表统计',
  },
]

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  )
}

// 主内容
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
)

// 右边的菜单栏
const SibarMenu = () => {
  // TODO 这里解决Key的问题
  return (
    <Menu
      mode="inline"
      // defaultSelectedKeys={['1']}
      // defaultOpenKeys={}
      style={{ height: '100%', borderRight: 0 }}
    >
      {SibarItems.map((element, index) =>
        element.children ? (
          <SubMenu key={index} title={element.title}>
            {element.children
              ? element.children.map((subItem, subIndex) => (
                  <Menu.Item key={'submenu-item' + subIndex}>
                    {subItem.title}
                  </Menu.Item>
                ))
              : null}
          </SubMenu>
        ) : (
          <Menu.Item key={'emnu-item' + index}>{element.title}</Menu.Item>
        )
      )}
    </Menu>
  )
}

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
  )
}

export default App
