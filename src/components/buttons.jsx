import React from 'react';
import './styles.scss';

const styles = {
    rounded: 'button-rounded',
};

export const Button = ({ text, styleName, additionalStyle={}, bc}) => (
    <button 
        className={styles[styleName]} 
        style={bc ? { ...additionalStyle, backgroundColor: bc} : { ...additionalStyle }}>
            {text}
    </button>
); 