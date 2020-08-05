import React, { useState, useEffect } from 'react';
import style from './style.module.less';
import { Layout } from 'antd';
import SiderContent from './../siderContent';
import MainContent from '../goodsMgt';
import AuthMgt from './../authMgt';
import { Route, Switch } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

let router = [
  {
    path: '/goodsMgt/list',
    component: MainContent,
    name: '商品列表',
  },
  {
    path: '/authMgt/roleMgt',
    component: AuthMgt,
    name: '角色管理',
  },
];
interface IState {
  intPathName: string;
}
function LayoutView() {
  const initState: IState = {
    intPathName: '1',
  };
  const [pathName, setCount] = useState(initState.intPathName);
  useEffect(() => {
    let nowPathName: string = window.location.href.split('#')[1];
    setCount(nowPathName);
  });
  return (
    <div className={style.layout}>
      {pathName}
      <Layout>
        <Sider>
          <SiderContent pathName={pathName} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              {router.map((route, idx) => {
                const baseParam = {
                  key: 'route_' + idx,
                  path: route.path,
                  exact: true,
                };
                return <Route {...baseParam} component={route.component} />;
              })}
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutView;
