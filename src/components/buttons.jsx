import React from 'react';
import './styles.scss';

const styles = {
    rounded: 'button-rounded',
    primary: 'button-primary'
};

export const Button = ({ text, styleName='primary', additionalStyle={}, bc, onClick = () => {}}) => (
    <button
        onClick={onClick}
        className={styles[styleName]} 
        style={bc ? { ...additionalStyle, backgroundColor: bc} : { ...additionalStyle }}>
            {text}
    </button>
); 