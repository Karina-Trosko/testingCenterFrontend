import React from 'react';
import actions from '../../actions';
import { testApi, userApi } from '../../services/api';
import './header.scss';
import { Button } from '../../components';

export function Header({clickHandler}) {
    return (
        <div className="header">
            <button 
            className="header-item" 
            onClick={()=>{
                console.log('Log');
                testApi.getTests((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{console.log('i: ', r); return r.data[0].map(el => ({ ...el, itemType: 'test'}))});
                clickHandler('tests');
            }}>Tests
            </button>
            <button 
            className="header-item"
            onClick={()=>{
                userApi.getUsers((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{ return r.data[0].map(el => ({ ...el, itemType: 'user'}))});
                clickHandler('tests');
            }}>Users
            </button>
            <button 
            className="header-item"
            onClick={()=>{
                clickHandler('addTest');
            }}>Add test
            </button>
            <button 
            className="header-item"
            onClick={()=>{
                clickHandler('signin');
            }}>SignIn
            </button>
        </div>
    );
}