import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-jgb.firebaseio.com'
});

export default instance;