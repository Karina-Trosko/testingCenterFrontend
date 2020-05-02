import React from 'react';
import { Input, Button } from '../../components';
import { userApi } from '../../services/api';

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surname: '',
            patronymic: '',
            login: '',
            password: '',
            contactInformation: '',
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
                <Input labelText="First name: " idName="firstName" value={this.state.firstName} onChange={this.inputHandler} />
                <Input labelText="Surname: " idName="surname" value={this.state.surname} onChange={this.inputHandler} />
                <Input labelText="Patronymic: " idName="patronymic" value={this.state.patronymic} onChange={this.inputHandler} />
                <Input labelText="Login: " idName="login" value={this.state.login} onChange={this.inputHandler} />
                <Input labelText="Password: " idName="password" value={this.state.password} type="password" onChange={this.inputHandler} />
                <Input labelText="Contact information: " idName="contactInformation" value={this.state.contactInformation} onChange={this.inputHandler} />
                <Button text="Done" onClick={() => { userApi.signUp({ ...this.state }) }} />
                <Button text="Back to signIn"onClick={() => { this.props.signInHandler() }} />
            </div>
        )
    }
};