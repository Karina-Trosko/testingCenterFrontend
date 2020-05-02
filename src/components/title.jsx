import React from 'react';
import './styles.scss';

export const Title = ({text}) => (
<div className="title">{text}</div>
); 
export const Subtitle = ({ text, bold=false }) => (
<div className="subtitle" style={bold ? { fontWeight: '600' } : {}}>{text}</div>
);