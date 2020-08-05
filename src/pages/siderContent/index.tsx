import { NavLink } from 'react-router-dom';
import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import { AppstoreOutlined } from '@ant-design/icons';
import treeData from './menuData';
import style from './style.module.less';
import { withRouter, useLocation, useParams } from 'react-router-dom';

interface MenuList {
  value: string;
  label: string;
  url?: string;
  children: any;
}

function SiderBarView(params: any) {
  const { slug } = useParams();
  console.log(params, 'useParams', slug);
  let nowPathName: string = useLocation().pathname;

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
        selectedKeys={treeData.urlMapValueObj[nowPathName]}
        defaultSelectedKeys={treeData.urlMapValueObj[nowPathName]}
        // onClick={handleClick}
        // openKeys={treeData.urlMapValueObj[nowPathName].split('-')[0]}
        // defaultOpenKeys={[this.AppStore.state.menuSelectKey]}
      >
        {renderMenuItem(treeData.treeData)}
      </Menu>
    </div>
  );
}
const SiderBarViewWithRouter = withRouter(SiderBarView);
export default SiderBarViewWithRouter;
