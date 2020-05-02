import React from 'react';
import { connect } from "react-redux";
import actions from '../../actions';
import { testApi, userApi } from '../../services/api';
import './header.scss';
import { Button } from '../../components';
import { getisAuth, getisAdmin } from '../../selectors/user';

function HeaderImpl({ clickHandler, isAuth = false, isAdmin = false }) {
    return (
        <div className="header">
            <button
                className="header-item"
                onClick={() => {
                    console.log('Log');
                    testApi.getTests((r) => {
                        actions.changecatalogContent(r);
                    }, (r) => { console.log('i: ', r); return r.data[0].map(el => ({ ...el, itemType: 'test' })) });
                    clickHandler('tests');
                }}>Tests
            </button>
            {(isAuth && isAdmin) ? (<>
                <button
                    className="header-item"
                    onClick={() => {
                        userApi.getUsers((r) => {
                            actions.changecatalogContent(r);
                        }, (r) => { return r.data[0].map(el => ({ ...el, itemType: 'user' })) });
                        clickHandler('tests');
                    }}>Users
            </button>
                <button
                    className="header-item"
                    onClick={() => {
                        clickHandler('addTest');
                    }}>Add test
            </button></>) : null}
            <button
                className="header-item"
                onClick={() => {
                    isAuth ? actions.setupAuthUser({}) : clickHandler('authorization');
                }}>{isAuth ? 'SignOut' : 'SignIn'}
            </button>
        </div>
    );
}
const makeMapStateToProps = () => {
    const isAuth = getisAuth();
    const isAdmin = getisAdmin();
    const mapStateToProps = (state) => {
        return {
            isAuth: isAuth(state),
            isAdmin: isAdmin(state)
        };
    };
    return mapStateToProps;
};

export const Header = connect(makeMapStateToProps)(HeaderImpl);