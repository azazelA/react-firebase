import React, { Component } from 'react';
import fire from '../config/Fire';
class Login extends Component {
    constructor (props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
        this.errorMessage = this.errorMessage.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.errorMessage(error);
            })
    }
    errorMessage(e){
        this.setState({ [e.target.email]: 'urm nope' });
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.errorMessage(error);
            })
    }

    render() {
        document.title = 'Login Page'
        return (
            <div className="container">
                <div className="form">
                    <h3>Login</h3>
                    <p>or Sign up for a new account</p>
                    <form>
                        <div className="input">
                            <label htmlFor="InputEmail">Email</label>
                            <input type="email" name="email" id="InputEmail" onChange={this.handleChange} value={this.state.email} placeholder="Enter your email address"/>
                        </div>
                        <div className="input">
                            <label htmlFor="InputPassword">Password</label>
                            <input type="password" name="password" id="InputPassword" onChange={this.handleChange} value={this.state.password} placeholder="Set a password for your account"/>
                        </div>
                        <div className="input submit">
                            <input type="submit" onClick={this.login} value="Login" />
                        </div>
                        <div className="input submit">
                            <input type="submit" onClick={this.signup} value="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
