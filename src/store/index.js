import {defineStore} from 'pinia';
import {getGitHubList} from '@/apis/gitHub';

export const useAppStore = defineStore('App', {
  state: () => ({dataList: []}),
  getters: {},
  actions: {
    async getDataList(data) {
      getGitHubList(data)
        .then((res) => {
          this.dataList = Object.freeze(res);
        })
        .catch((err) => console.warn(err));
    },
  },
});
