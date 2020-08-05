// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { useHistory } from "react-router-dom";
// import mod from './AppStore.js';
// console.log('mod', mod);
// let history = useHistory();
@inject('AppStore')
@observer
class SiderBarView extends Component {
  AppStore: any;
  history: any;
  constructor(props: any) {
    super(props);
    this.AppStore = props.AppStore;
    this.history = props.history;
  }
  jumpAuth = () => {
    console.log('www');
    this.history.push('/goodsMgt/list');
    this.AppStore.handleSelectKey('1-1');
    // history.push('/home');
  };
  render() {
    return (
      <div>
        111111111111111111111111111111111111111111111111111111111111111111
        <a onClick={this.jumpAuth}>跳转到商品列表</a>
      </div>
    );
  }
}
export default SiderBarView;

// export default () => {
//   return (

//   );
// };
