import React, { Component } from 'react'
import Navbar from '../Components/Navbar';
import {Redirect} from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem('Token')

        let loggedIn = false;
        if(token == null) {
            loggedIn = false
        }else {
            loggedIn = true
        }
    
       this.state = {
           loggedIn
       }
       
    }
    


    render() {
        if(this.state.loggedIn === false) {
            return <Redirect to = "/" />
        }

        return (
            <div>
                <Navbar />
                <div className="container">
                    <h5>Welcome to About Page</h5>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default About
