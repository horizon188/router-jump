// mobx的公共方法
import { observable, action } from 'mobx';

// 严格模式
// useStrict(true);

class AppStore {
  // 监视状态
  @observable state: any = {
    menuSelectKey: '2-1',
  };

  @action handleSelectKey = (selectKey: string) => {
    console.log('selectKey', selectKey);
    this.state.menuSelectKey = selectKey;
  };
}

const appStore = new AppStore();
export default appStore;
// export { AppStore };
