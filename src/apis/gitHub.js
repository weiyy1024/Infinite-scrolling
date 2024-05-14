import axios from './index';

const handler = (data) => {
  return data.map((node) => ({
    uuid: node.id,
    title: node.full_name,
    url: node.html_url,
    description: node.description ?? '',
  }));
};

export const getGitHubList = async ({page = 1, pageAmount = 6}) => {
  const res = await axios({
    url: '/repos',
    method: 'get',
    isAuth: false,
    params: {
      per_page: pageAmount,
      page,
    },
  });

  return handler(res);
};
