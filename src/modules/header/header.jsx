import React from 'react';
import actions from '../../actions';
import { testApi, userApi } from '../../services/api';
import './header.scss';

export function Header() {
    return (
        <div className="header">
            <div 
            className="header-item" 
            onClick={()=>{
                testApi.getTests((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{ return r.data[0].map(el => ({ ...el, itemType: 'test'}))});
            }}>Tests
            </div>
            <div 
            className="header-item"
            onClick={()=>{
                userApi.getUsers((r)=>{
                    actions.changecatalogContent(r); 
                }, (r)=>{ return r.data[0].map(el => ({ ...el, itemType: 'user'}))});
            }}>Users
            </div>
        </div>
    );
}