import React, { Component } from 'react';
import fire from '../config/Fire';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        document.title = 'Login Page'
        return (
            <div className="Home">
                <h1>You're finally home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>

        );
    }
}

export default Home;
