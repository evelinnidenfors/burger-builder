import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-2686d.firebaseio.com'
})

export default instance;