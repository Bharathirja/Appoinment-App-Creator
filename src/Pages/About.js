import React, { Component } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }



    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <div className="container">
                    <h5>Welcome to About Page</h5>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default About
