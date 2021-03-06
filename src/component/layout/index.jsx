import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from 'component/sidebar';
import './layout.scss';

// define layout header Sider content footer
const { Header, Sider, Content, Footer } = Layout; 
class PageLayout extends Component {

  render() {
    return (
      <Layout className="layout">
        <Sider><Sidebar /></Sider>
        <Layout>
          <Header className="header">welcome xiao 😄</Header>
          <Content className="content">
            <div className="inner-content">{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout