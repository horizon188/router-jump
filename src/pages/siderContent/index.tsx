import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import { AppstoreOutlined } from '@ant-design/icons';
import treeData from './menuData';
import style from './style.module.less';

interface InitProps {
  pathName: string;
}
interface InitState {
  initPathName: string;
}
interface MenuList {
  value: string;
  label: string;
  url?: string;
  children: any;
}
function SiderBarView(params: InitProps) {
  const initState: InitState = {
    initPathName: params.pathName,
  };
  const [pathName, setCount] = useState(initState.initPathName);
  useEffect(() => {
    setCount(params.pathName);
  });

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
                <span>{item.label}</span>
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

  // const handleClick = (e: any) => {
  //   this.AppStore.handleSelectKey(e.key);
  // };
  return (
    <div className={style.siderMenu}>
      <Menu
        style={{ width: 256 }}
        mode="inline"
        selectedKeys={treeData.urlMapValueObj[pathName]}
        defaultSelectedKeys={treeData.urlMapValueObj[pathName]}
        // onClick={handleClick}
        // openKeys={[this.AppStore.state.menuSelectKey]}
        // defaultOpenKeys={[this.AppStore.state.menuSelectKey]}
      >
        {renderMenuItem(treeData.treeData)}
      </Menu>
    </div>
  );
}

export default SiderBarView;
