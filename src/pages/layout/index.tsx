import React, { useState, useEffect } from 'react';
import style from './style.module.less';
import { Layout } from 'antd';
import SiderContent from '../siderContent';
import RouterRender from './../../router';
const { Header, Footer, Sider, Content } = Layout;

interface IState {
  initPathName: string;
}
function LayoutView() {
  const initState: IState = {
    initPathName: '1',
  };
  const [pathName, setCount] = useState(initState.initPathName);
  useEffect(() => {
    let nowPathName: string = window.location.href.split('#')[1];
    setCount(nowPathName);
  });

  return (
    <div className={style.layout}>
      <Layout>
        <Sider>
          <SiderContent pathName={pathName} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>{RouterRender()}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutView;
