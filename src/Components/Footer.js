import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                <div className="container">
                    <span className="text-muted">PG Analytics@2020</span>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer
