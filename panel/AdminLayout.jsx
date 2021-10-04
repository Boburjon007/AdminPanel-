import './AdminLayout.css'
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
  RollbackOutlined,
  
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { G31_TOKEN } from '../constants';

const { Header, Sider, Content } = Layout;

class AdminLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState( {
      collapsed: !this.state.collapsed,
    } );
  };

  render() {
    const logout = () =>{
      localStorage.removeItem(G31_TOKEN);
      window.location.href="/login"
    }
    return (
      <Layout id='trcomponents-layout-demo-customigger'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
            <Menu.Item key="1" icon={< PieChartOutlined />}>
              <Link to='/Dashboard'> Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/Tutors'> Tutors</Link>
             
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to='/Group'> Group</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to='/Students'> Students</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={ <RollbackOutlined />} onClick={logout}>
               Chiqish
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{
              paddingLeft: 24,
            }}>
            {React.createElement( this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            } )}
          </Header >
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AdminLayout