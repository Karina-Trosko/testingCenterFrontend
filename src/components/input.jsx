import React from 'react';
import './styles.scss';

export const Input = ({ type="text", idName, onChange=()=>{}, placeholder="", defaultValue="", labelText = '', withoutBoorder=false, value='' }) => {
    return (
        <div className="input-block" style={ withoutBoorder ? { border: 'none' } : {}}>
            {labelText ?
                <label htmlFor={idName}>
                    <span>{labelText}</span>
                </label>
                : null}
            <input
                type={type}
                id={idName}
                className="input-block-input"
                onChange={onChange}
                placeholder={placeholder}
                value = {value || defaultValue}
            />
        </div>
    );
};