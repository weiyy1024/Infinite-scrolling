import {defineStore} from 'pinia';
import {getGitHubList} from '@/apis/gitHub';

export const useAppStore = defineStore('App', {
  state: () => ({
    dataList: [],
    lock: false,
  }),
  getters: {},
  actions: {
    async getDataList(data) {
      //  排除已拿到最後一頁則不再更新
      if (this.lock) return;
      getGitHubList(data)
        .then((res) => {
          if (res.length < 6) {
            this.lock = true;
          }

          if (this.dataList.length === 0) {
            this.dataList = res;
          } else {
            this.dataList = [...this.dataList, ...res];
          }
        })
        .catch((err) => console.warn(err));
    },
  },
});
