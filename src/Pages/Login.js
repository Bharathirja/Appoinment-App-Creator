import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
            loggedIn:false
        }
    }

    // Login Method When login Button Click this will be function
    Login() {
        // API Fetch real Data 
        console.log(this.state)
        // fetch('http://127.0.0.1:8000/api/login',{
        //     method:'POST',
        //     headers:"application/json",
        //     "Content-Type":"application/json",
        // },
        // body,JSON.stringify(this.state)).then((result)=>{
        //     result.json().then((res)=>{
        //         console.log(res)
        //         localStorage.setItem("Token",JSON.stringify(res.token))
        //     })
        // })

        // Just Testing without Backend
        if(this.state.username ==="A" && this.state.password === "B") {
            localStorage.setItem('Token',"Bharathiraja")
            this.setState({
                loggedIn:true
            })

        }
        else {
            alert("Username or Password Incorrect")
        }
    }

    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to = "/home" />
        }
       
        return (

            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    <img src="./Images/download.png" id="icon" alt="User Icon" />
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

export default Login
