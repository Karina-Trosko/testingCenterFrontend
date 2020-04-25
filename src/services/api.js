import axios from 'axios';
import actions from '../actions';

export const testApi = {
    getTests: (handler, resultMaker=(r)=>{return r.data}) => {
        axios.get('/api/tests')
        .then(res => {
            handler(resultMaker(res));
        })
    }, 
    deleteTest: (id) => {
        axios.post(`/api/test/delete/${id}`).then(r => {
            console.log(r);
            axios.get('/api/tests')
            .then(res => {
                actions.changecatalogContent(res.data[0].map(el => ({ ...el, itemType: 'test'})));
            })
        });
    }
};

export const userApi = {
    getUsers: (handler, resultMaker=(r)=>{return r.data}) => {
        axios.get('/api/users')
        .then(res => {
            handler(resultMaker(res));
        })
    },
    deleteUser: (id) => {
        axios.post(`/api/user/delete/${id}`).then(r => {
            console.log(r);
            axios.get('/api/users')
            .then(res => {
                actions.changecatalogContent(res.data[0].map(el => ({ ...el, itemType: 'user'})));
            })
        });
    }
};