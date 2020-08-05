import React from 'react';
// import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

// @observer
// 函数怎么用Decorators~
function SiderBarView() {
  // const jumpAuth = ():void => {};
  // 定义了any就没报错了~
  let history: any = useHistory();

  const jump = (): any => {
    history.push('/goodsMgt/list');
  };

  return (
    <div>
      111111111111111111111111111111111111111111111111111111111111111111
      <a onClick={jump}>跳转到商品列表</a>
    </div>
  );
}

export default SiderBarView;
