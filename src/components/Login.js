import React, { Component } from 'react';
class Login extends Component {
    constructor (props){
        super(props)
        this.state = {
            email: {},
            password: {}
        }
    }

    handleChange(e){
        //e.preventDefault();
        //this.setState()
    }

    render() {
        document.title = 'Login Page'
        return (
            <div className="form">
                <form>
                    <div className="input">
                        <label htmlFor="InputEmail">Email</label>
                        <input type="email" name="email" id="InputEmail" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="input">
                        <label htmlFor="InputPassword">Password</label>
                        <input type="password" name="password" id="InputPassword" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div className="input">
                        <input type="submit" className="submit" onChange={this.login} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
