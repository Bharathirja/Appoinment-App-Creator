import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {Redirect } from 'react-router-dom';
import axios from 'axios';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        let token = localStorage.getItem('Token')
        let loggedIn = false;

        if(token == null) {
            loggedIn = false
        }else {
            loggedIn = true
        }

        // State Initially
        this.state = {
            Shop_Name:"",
            Owner_Name:"",
            Mobile_Number:"",
            Email:"",
            Address:"",
            GST_Number:"",
            Title_Bar_Color:"",
            Background_Image:"",
            Icon_Color:"",
            Logo:"",
            loggedIn
        }

        this.BgIChange = this.BgIChange.bind(this)
        this.logoChange = this.logoChange.bind(this)
    }

    // Background image change
    BgIChange(event) {
        this.setState({
            Background_Image: URL.createObjectURL(event.target.files[0])
        })
    }

    // Logo image change
    logoChange(event) {
        this.setState({
            Logo:URL.createObjectURL(event.target.files[0])
        })
    }

    // This handler using for every input Value changing
    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // Submit form
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)

        // Data post API
        // axios.post("URL",this.state)
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    render() {

        // declared here state keys using for inputs values
        const { Shop_Name,
        Owner_Name,
        Mobile_Number,
        Email,
        Address,
        GST_Number,
        Title_Bar_Color,
        Background_Image,
        Icon_Color,
        Logo } = this.state
        
        // If user not logged in page redirect to login
        if(this.state.loggedIn === false) {
            return <Redirect to = "/" />
        }

        // Else return home page
        return (
            <div>
                {/* Top Nav Bar */}
                <Navbar />
                {/* End */}
                
                <div className="container-fluid" >

                    <div className="shadow p-3 mb-5 bg-white ">

                        <div className="row">

                            <div className="col-md-9">
                                <h6 className="mb-3 font-weight-bold">MERCHANT APPLICATION</h6>
                                <hr />
                                <form onSubmit={this.submitHandler}>
                                    <div className='row'>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Shop Name</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="Shop_Name" 
                                                placeholder = "Merchant Name" 
                                                value = {Shop_Name}
                                                onChange={this.changeHandler}
                                            />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Owner Name</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="Owner_Name" 
                                                placeholder = "Owner Name"
                                                value = {Owner_Name}
                                                onChange = { this.changeHandler }
                                            />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Mobile Number</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="Mobile_Number" 
                                                placeholder = "Mobile Number"
                                                value = {Mobile_Number}
                                                onChange = { this.changeHandler }
                                            />
                                        </div>
                                       
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Email</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="Email" 
                                                placeholder = "Email"
                                                value = {Email}
                                                onChange = { this.changeHandler }
                                            />
                                        </div>

                                    </div>

                                    <div className='row'>
                                        
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Address</label>
                                            <textarea 
                                                className="form-control" 
                                                name="Address"
                                                value = {Address}
                                                onChange = { this.changeHandler }
                                                >
                                            </textarea>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>GST Number</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="GST_Number" 
                                                placeholder = "GST Number"
                                                value = {GST_Number}
                                                onChange = { this. changeHandler}
                                            />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label  className='font-weight-bold'>Title bar color</label>
                                            <select className="form-control" id="state" onChange={(e) => this.setState({ Title_Bar_Color: e.target.value })}>
                                                <option value="">Choose...</option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Logo</label>
                                            <input type='file' onChange={this.logoChange}/>
                                        </div>

                                    </div>

                                    <div className='row'>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Background Image</label>
                                            <input type='file'  onChange={this.BgIChange}/>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label  className='font-weight-bold'>Icon color</label>
                                            <select className="form-control" id="state" onChange={(e) => this.setState({Icon_Color:e.target.value})}>
                                                <option value="">Choose...</option>
                                                <option value="red">Red</option>
                                            <option value="green">Green</option>

                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6 mb-3">
                                            <button className="btn btn-secondary"> EDIT</button>
                                            <button className="btn btn-info m-4 mt-3" type="submit"> SAVE</button>
                                            <button className="btn btn-success">BUILD APP</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-3 font-weight-bold">
                                <h6 className="mb-3">PREVIEW</h6>
                                <hr/>

                                <div className="col-md-3 mb-3">
                                    <label>Logo</label>
                                    <img src={this.state.Logo}/>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label>Background Image</label>
                                    <img src={this.state.Background_Image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
