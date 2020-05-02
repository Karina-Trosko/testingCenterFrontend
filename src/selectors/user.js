import { createSelector } from "reselect";

const getUserAuth = (state) => state.authUser;

export const getisAuth = () => {
    return createSelector(
        [getUserAuth],
        (user = {}) => {
            return user.id ? true : false;
        }
    );
};

export const getisAdmin = () => {
    return createSelector(
        [getUserAuth],
        (user = {}) => {
            return user.role && user.role==='admin' ? true : false;
        }
    );
};