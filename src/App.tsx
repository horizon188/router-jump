import React from 'react';
import { hot } from 'react-hot-loader/root';
// import { Router, Pages } from 'common';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/layout';
/**
 * Router 用于注册基础路由
 * Pages 路由页面集合
 */
const App = () => (
  <Router>
    <Switch>
      <Route path="/register" exact render={({}) => <h2>注册页</h2>} />
      <Route path="/" component={Layout} />
    </Switch>
  </Router>
);

// 热更新
export default process.env.NODE_ENV === 'development' ? hot(App) : App;
