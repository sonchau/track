import axios from 'axios';
import { AsyncStorage } from 'react-native';

//every 8 hour ngrok will be restart
// need to run "ngrok http 3000" to get new url
let url;
if (__DEV__) {
  url = 'http://9a0229b996f7.ngrok.io/';
} else {
  url = 'https://sleepy-savannah-10606.herokuapp.com';
}

const instance = axios.create({
  baseURL: url
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
