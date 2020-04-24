import axios from 'axios';
export const testApi = {
    getTests: (hendler, resultMaker=(r)=>{return r.data}) => {
        axios.get('/api/tests')
        .then(res => {
            hendler(resultMaker(res));
        })
    }
};