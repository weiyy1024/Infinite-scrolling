import axios from './index';

const handler = (data) => {
  return data.map((node) => ({
    title: node.full_name,
    url: node.html_url,
    description: node.description,
  }));
};

export const getGitHubList = async ({page = 1, pageAmount = 6}) => {
  axios({
    url: '/repos',
    method: 'get',
    isAuth: true,
    params: {
      per_page: pageAmount,
      page,
    },
  })
    .then((res) => Promise.resolve(handler(res)))
    .catch((err) => Promise.reject(err));
};
