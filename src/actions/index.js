import * as catalogContent from './catalogContent';
import * as userInfo from './user';
import { store } from '../store';

const connectActions = (actions) => {
const result = {};
Object.keys(actions).forEach((id) => {
    const actionFunction = actions[id];
    result[id] = (...args) => actionFunction(...args)(store.dispatch, store.getState);
});
return result;
};

export default {
    ...connectActions({ ...catalogContent, ...userInfo })
};