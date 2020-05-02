import React from 'react';
import { Input, Button } from '../../components';
import { userApi } from '../../services/api';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
    }
    inputHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    };

    render() {
        return (
            <div>
                <Input labelText="Login: " idName="login" value={this.state.login} onChange={this.inputHandler} />
                <Input labelText="Password: " idName="password" value={this.state.password} type="password" onChange={this.inputHandler} />
                <Button text="SignIn" onClick={() => { userApi.signIn({ ...this.state }) }} /><Button text="Registration" onClick={() => {this.props.signUpHandler();}} />
            </div>
        )
    }
};