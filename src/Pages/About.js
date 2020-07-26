import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

import {Redirect} from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props)
       
    }
    

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h5>Welcome to About Page</h5>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About
