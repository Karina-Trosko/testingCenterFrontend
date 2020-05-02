import axios from 'axios';
import actions from '../actions';

export const testApi = {
    getTests: (handler, resultMaker = (r) => { return r.data }) => {
        axios.get('/api/tests')
            .then(res => {
                handler(resultMaker(res));
            })
    },
    addTest: (data) => {
        axios.post('/api/test/add', { ...data }).then(r => {
            console.log(r);
            axios.get('/api/tests')
                .then(res => {
                    actions.changecatalogContent(res.data[0].map(el => ({ ...el, itemType: 'test' })));
                })
        });
    },
    deleteTest: (id) => {
        axios.post(`/api/test/delete/${id}`).then(r => {
            console.log(r);
            axios.get('/api/tests')
                .then(res => {
                    actions.changecatalogContent(res.data[0].map(el => ({ ...el, itemType: 'test' })));
                })
        });
    },
    getTypes: (handler, resultMaker = (r) => { return r.data }) => {
        axios.get('/api/types')
            .then(res => {
                handler(resultMaker(res));
            })
    },
    getCategories: (handler, resultMaker = (r) => { return r.data }) => {
        axios.get('/api/categories')
            .then(res => {
                handler(resultMaker(res));
            })
    },
    getContent: (handler = () => { }, resultMaker = (r) => { return r.data }) => {
        axios.get('/api/tests/content')
            .then(res => {
                handler(resultMaker(res));
                console.log('content: ', res);
            })
    },
};

export const userApi = {
    getUsers: (handler, resultMaker = (r) => { return r.data }) => {
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
                    actions.changecatalogContent(res.data[0].map(el => ({ ...el, itemType: 'user' })));
                })
        });
    },
    signUp: (data) => {
        axios.post('/api/users/signUp', { ...data }).then(r => {
            console.log(r);
            if (r.data.login) { actions.setupAuthUser({ ...r.data }); }
            else {window.alert(r.data)}
        });
    },
    signIn: (data) => {
        axios.post('/api/users/signIn', { ...data }).then(r => {
            console.log(r);
            if (r.data.login) { actions.setupAuthUser({ ...r.data }); }
            else {window.alert(r.data)}
        });
    },
};