import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import Navbar from './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    logout() {
      localStorage.clear()
    }

    render() {
        return (
            
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 shadow p-3 mb-6 border-bottom">
            <div className="container">
            <NavLink className="navbar-brand" to="/home">APP CREATOR</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink exact activeClassName="active-link" className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active-link" className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active-link" className="nav-link" to="/" onClick={()=>this.logout()}>Logout</NavLink>
                </li>
               
              </ul>
             
            </div>
            </div>
          </nav>
        )
    }
}

export default Navbar
