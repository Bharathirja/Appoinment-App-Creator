import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    submit = () => {
      confirmAlert({
        // title: <div><h5>logout</h5></div>,
        message: "Are you sure to logout?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {this.logout()}
          },
          {
            label: "No",
            // onClick: () => alert('Click No')
          }
        ]
      });
    };

    logout() {
      sessionStorage.clear()
      window.location.assign(window.location.origin + "/#/")
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
                  <NavLink exact  className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link" to="/add-merchant">New Merchant</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink exact  className="nav-link" to="/about">About</NavLink>
                </li> */}
                <li className="nav-item">
                  {/* <button  onClick={this.submit}> */}
                  {/* <NavLink exact activeClassName="active-link" className="nav-link"  onClick={this.submit}> */}
                    {/* Logout
                    </button> */}
                    {/* </NavLink> */}
                  {/* <Link  >New Merchant</Link> */}

                    
                    
                </li>
               
              </ul>
             
            </div>
            <button className="btn btn-outline-primary mr-2" onClick={this.submit}>logout</button>
            {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-right" fill="white" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'12px',marginLeft:"12px",cursor:"pointer"}} onClick={this.submit}>
                      <path fill-rule="evenodd" d="M11.646 11.354a.5.5 0 0 1 0-.708L14.293 8l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                      <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                      <path fill-rule="evenodd" d="M2 13.5A1.5 1.5 0 0 1 .5 12V4A1.5 1.5 0 0 1 2 2.5h7A1.5 1.5 0 0 1 10.5 4v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V12A1.5 1.5 0 0 1 9 13.5H2z"/>
                  </svg> */}
            </div>
          </nav>
        )
    }
}

export default Navbar
