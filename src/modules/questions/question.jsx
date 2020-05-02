import React from 'react';
import { Subtitle } from '../../components';
import './styles.scss';

export const Question = ({ question, variants = [] }) => {
    return (
        <div className="question-block">
            <Subtitle text={question} bold={true}/>
            {variants.map((el, i) => (<Subtitle text={`${i + 1}. ${el}`} key={i} />))}
        </div>
    );
};