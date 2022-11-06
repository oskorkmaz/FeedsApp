import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Feed, Feeds} from '../utils/types';

var mock = new MockAdapter(axios);

export const getUsers = async (page: number) => {
  let data: Feed[] = [];
  mock.onGet('/users').reply(200, {
    users: Feeds.slice(0, 3 + page * 3),
  });
  await axios.get('/users').then(response => {
    data = response.data.users;
  });
  return data;
};
