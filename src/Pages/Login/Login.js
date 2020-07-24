import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "../../action/loginAction";
import loginApi from "../../api/loginApi";

var CryptoJS = require("crypto-js");

class Login extends Component {

    constructor(props) {
        super(props)
    }

    setSessionStorage(result) {
        // console.log(result);
        if (result) {
            let userDetails = {};
            window.sessionStorage.setItem('userToken', JSON.stringify(result.access));
        }
    }

    login(loginDetails) {
        return loginApi.login(loginDetails)
    }

    redirectPage() {
        this.props.history.replace("/home")
    }

    // Login Method When login Button Click this will be function
    Login() {

        // API Fetch real Data 
        const loginDetails = {
            username:this.state.username,
            password:this.state.password
        }
        console.log(loginDetails)
        this.login(loginDetails)
        .then(res => {
           
            let data = res.data
            console.log(data);
            this.setSessionStorage(data);
            this.redirectPage()

        }).catch(err => {
            console.log(err)
            alert(err)
        });
        
    }

    render() {
        // if (this.state.loggedIn) {
        //     return <Redirect to = "/home" />
        // }
       
        return (

            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    <img src={require("../../Images/pg-logo.svg")} id="icon" alt="User Icon" />
                    </div>
                    {/* <form> */}
                        <input 
                            type="text"  
                            className="fadeIn second" 
                            name="username" 
                            placeholder="username"
                            onChange={(e) => this.setState({username:e.target.value})}
                        />
                        
                        <input 
                            type="text"  
                            className="fadeIn third" 
                            name="password" 
                            placeholder="password"
                            onChange={(e) => this.setState({password:e.target.value})}
                        />
                        
                        <input 
                            type="submit" 
                            className="fadeIn fourth" 
                            value="Login" 
                            onClick={()=>this.Login()}
                        />
                    {/* </form> */}

                    <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
            
        )
    }
}


export default Login;

