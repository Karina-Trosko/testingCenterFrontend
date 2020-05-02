import React from 'react';
import { SignIn } from './signIn';
import { SignUp } from './signUp';

export class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.routs = {
            signIn: (<SignIn signUpHandler={()=>{ this.setState({ route: 'signUp' }); }}/>),
            signUp: (<SignUp signInHandler={()=>{ this.setState({ route: 'signIn' }); }}/>),
        };
        this.state = {
            route: 'signIn',
        }
    }
    render() {
        return (
            this.routs[this.state.route]
        );
    }
}
