import React from 'react';
import style from './style.module.less';
import { Layout } from 'antd';
import SiderContent from '../siderContent';
import RouterRender from './../../router';
const { Header, Footer, Sider, Content } = Layout;

function LayoutView() {
  return (
    <div className={style.layout}>
      <Layout>
        <Sider>
          <SiderContent />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <RouterRender />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutView;
