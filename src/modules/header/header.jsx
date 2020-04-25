import React from 'react';
import actions from '../../actions';
import { testApi, userApi } from '../../services/api';
import './header.scss';

export function Header() {
    return (
        <div className="header">
            <button 
            className="header-item" 
            onClick={()=>{
                console.log('Log');
                testApi.getTests((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{console.log('i: ', r); return r.data[0].map(el => ({ ...el, itemType: 'test'}))});
            }}>Tests
            </button>
            <button 
            className="header-item"
            onClick={()=>{
                userApi.getUsers((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{ return r.data[0].map(el => ({ ...el, itemType: 'user'}))});
            }}>Users
            </button>
            <button 
            className="header-item"
            onClick={()=>{
                testApi.getUsers((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{ return r.data[0].map(el => ({ ...el, itemType: 'user'}))});
            }}>Add test
            </button>
        </div>
    );
}