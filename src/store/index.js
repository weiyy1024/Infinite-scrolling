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
      if (this.lock) return;

      getGitHubList(data)
        .then((res) => {
          const {page} = data;
          const list = [...this.dataList];

          if (page === 2) {
            list.pop();
          }

          this.dataList = list.concat(res);
          this.lock = res.length === 0;
        })
        .catch((err) => console.warn(err));
    },
  },
});
