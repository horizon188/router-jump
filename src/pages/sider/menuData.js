let treeData = [
  {
    value: '1',
    label: '商品管理',
    children: [
      {
        value: '1-1',
        label: '商品列表',
        url: '/goodsMgt/list',
        children: null,
      },
      {
        value: '1-2',
        label: '商品类目',
        url: '/goodsMgt/detail',
        children: null,
      },
    ],
  },
  {
    value: '2',
    label: '权限管理',
    children: [
      {
        value: '2-1',
        label: '角色管理',
        url: '/authMgt/roleMgt',
        children: null,
      },
      {
        value: '2-2',
        label: '用户管理',
        url: '/authMgt/userMgt',
        children: null,
      },
    ],
  },
];

export default treeData;
