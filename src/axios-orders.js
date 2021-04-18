import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3b7f7-default-rtdb.firebaseio.com/'
});

export default instance;