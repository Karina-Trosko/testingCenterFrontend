import { SETUP_AUTH_USER } from './constants';

export const setupAuthUser = (authUser) => dispatch => dispatch({
    type: SETUP_AUTH_USER,
    authUser,
}
);