import React from 'react';
// import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { inject } from 'mobx-react';

// @observer
// 函数怎么用Decorators~
function SiderBarView(params: any) {
  console.log('params', params.AppStore.state.menuSelectKey);
  // const jumpAuth = ():void => {};
  // 定义了any就没报错了~
  let history: any = useHistory();

  const jump = (): any => {
    history.push('/authMgt/roleMgt');
  };

  return (
    <div>
      111111111111111111111111111111111111111111111111111111111111111111
      <a onClick={jump}>跳转到角色管理</a>
    </div>
  );
}

export default inject('AppStore')(SiderBarView);
