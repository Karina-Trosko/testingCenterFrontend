import './header.scss';

import React from 'react';

export function Header() {
    return (
        <div className="header">
            <div className="header-item" onClick={()=>console.log('log2')}>Tests</div>
            <div className="header-item" onClick={()=>console.log('log')}>Users</div>
        </div>
    );
}