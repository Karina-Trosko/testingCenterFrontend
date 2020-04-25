import axios from 'axios';

export const testApi = {
    getTests: (handler, resultMaker=(r)=>{return r.data}) => {
        axios.get('/api/tests')
        .then(res => {
            handler(resultMaker(res));
        })
    }
};

export const userApi = {
    getUsers: (handler, resultMaker=(r)=>{return r.data}) => {
        axios.get('/api/users')
        .then(res => {
            handler(resultMaker(res));
        })
    }
};