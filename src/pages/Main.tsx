import React from 'react';
import { Layout } from 'antd';
import SideBar from '../components/SideBar';

const { Header, Content } = Layout;

const Main: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <SideBar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main;
