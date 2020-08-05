import { NavLink } from 'react-router-dom';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { Menu } from 'antd';
import { observer, inject } from 'mobx-react';
const { SubMenu } = Menu;
import { AppstoreOutlined } from '@ant-design/icons';
import treeData from './menuData';
import style from './style.module.less';
// import mod from './AppStore.js';
// console.log('mod', mod);
interface IState {
  pathName: string;
}
@inject('AppStore')
@observer
class SiderBarView extends Component<{ pathName: string }> {
  AppStore: any;
  pathName: string;
  state: IState;
  constructor(props: any) {
    super(props);
    this.AppStore = props.AppStore;
    this.pathName = props.pathName;
    this.state = { pathName: props.pathName };
  }
  componentWillReceiveProps(nextProps: any) {
    this.setState({ pathName: nextProps.pathName });
  }

  // shouldComponentUpdate(nextProps:any) {

  //   return true;
  // }
  // shouldComponentUpdate(nextProps: any) {
  //   console.log('sss', nextProps);
  // }
  handleClick = (e: any) => {
    this.AppStore.handleSelectKey(e.key);
  };
  render() {
    interface MenuList {
      value: string;
      label: string;
      url?: string;
      children: any;
    }
    const renderMenuItem = (menuArray: MenuList[]) => {
      // 遍历菜单列表
      return menuArray.map((item) => {
        if (item.children) {
          return (
            <SubMenu
              key={item.value}
              title={
                <span>
                  <AppstoreOutlined />
                  <span>{item.label + this.state.pathName}</span>
                </span>
              }
            >
              {renderMenuItem(item.children)}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.value}>
              <NavLink to={item.url ? item.url : '#'}>
                <span>{item.label}</span>
              </NavLink>
            </Menu.Item>
          );
        }
      });
    };

    return (
      <div className={style.siderMenu}>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={[this.AppStore.state.menuSelectKey]}
          // openKeys={[this.AppStore.state.menuSelectKey]}
          defaultOpenKeys={[this.AppStore.state.menuSelectKey]}
          mode="inline"
          selectedKeys={treeData.urlMapValueObj[this.state.pathName]}
        >
          {renderMenuItem(treeData.treeData)}
        </Menu>
      </div>
    );
  }
}
export default SiderBarView;

// export default () => {
//   return (

//   );
// };
