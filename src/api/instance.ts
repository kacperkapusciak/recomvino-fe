import axios from 'axios';

const dev = 'http://localhost:7000';
const prod = 'https://recomvino-be.herokuapp.com';
const url = process.env.NODE_ENV === 'production' ? prod : dev;

export default axios.create({
  baseURL: `${url}/api/`,
});
