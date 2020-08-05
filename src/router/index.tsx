import GoodList from './../pages/goodsMgt';
import AuthMgt from './../pages/authMgt';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

let router = [
  {
    path: '/goodsMgt/list',
    component: GoodList,
    name: '商品列表',
  },
  {
    path: '/authMgt/roleMgt',
    component: AuthMgt,
    name: '角色管理',
  },
];

function routerRender() {
  return (
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
  );
}

export default routerRender;
