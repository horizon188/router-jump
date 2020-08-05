import React from 'react';
// import { Link } from 'react-router-dom';
import style from './style.module.less';
import { Layout } from 'antd';
import SiderContent from './../sider';
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

export default () => {
  // declare function create(o: object | null): void;
  // create({ prop: 0 });
  // let someValue: any = "this is a string";
  // let strLength: number = (<string>{someValue}).length;

  return (
    <div className={style.layout}>
      <Layout>
        <Sider>
          <SiderContent />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              {router.map(
                (route, idx) => {
                  const baseParam = {
                    key: 'route_' + idx,
                    path: route.path,
                    exact: true,
                  };
                  // if (route.render) {
                  //   return <Route {...baseParam} component={route.render} />;
                  // } else {
                  return <Route {...baseParam} component={route.component} />;
                }
                // }
              )}
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
