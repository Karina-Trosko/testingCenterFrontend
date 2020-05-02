import React, { useState, useEffect } from 'react';
import './styles.scss';

export class ComboBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

    }
    componentDidMount() {
        this.props.loadDataFunction((r) => { this.setState({ data: r }); console.log('DATA: ', r); }, (r) => r.data[0]);
    }
    render() {
        const { data } = this.state;
        const { labelText, onChange=()=>{}, idName } = this.props;
        return (
            <div className="combobox-block">
                {labelText ?
                    <span style={{
                        fontSize: '16px',
                        fontWeight: '600'
                    }}>{labelText}</span>
                    : null}
                <select onChange={onChange} id={idName} defaultValue={(data[0] || {}).id}>
                <option value={0} key={0}>Select...</option>
                    {data.map(el => (<option value={el.id} key={el.id}>{el.name}</option>))}
                </select>
            </div>
        );
    }
}