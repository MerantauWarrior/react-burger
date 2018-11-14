import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-1822a.firebaseio.com/'
});

export default instance;