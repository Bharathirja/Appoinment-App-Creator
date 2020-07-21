import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {Redirect } from 'react-router-dom';

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
                {/* Top Nav Bar */}
                <Navbar />
                {/* End */}
                <div className="container">
                    <div class="shadow p-3 mb-5 bg-white rounded">
                        <div className = "col-md-12 order-md-1">
                            <h6 className="mb-3">MERCHANT APPLICATION</h6>
                            <hr />
                            <div className="container">
                                <form>
                                    <div className='row'>
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Shop Name</label>
                                            <input type='text' className="form-control" placeholder = "Merchant Name"/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Owner Name</label>
                                            <input type='text' className="form-control" placeholder = "Owner Name"/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Mobile Number</label>
                                            <input type='text' className="form-control" placeholder = "Mobile Number"/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Email</label>
                                            <input type='text' className="form-control" placeholder = "Email"/>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Address</label>
                                            <textarea className="form-control"></textarea>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>GST Number</label>
                                            <input type='text' className="form-control" placeholder = "GST Number"/>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label for="state" className='font-weight-bold'>Title bar color</label>
                                            <select className="form-control" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>Red</option>
                                            <option>Green</option>

                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Background Image</label>
                                            <input type='file' className="form-control" placeholder = "BG image"/>
                                        </div>
                                        
                                    </div>

                                    <div className='row'>
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Logo</label>
                                            <input type='file' className="form-control" placeholder = "BG image"/>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="state" className='font-weight-bold'>Icon color</label>
                                            <select className="form-control" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>Red</option>
                                            <option>Green</option>

                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6 mb-3">
                                            <button className="btn btn-secondary"> EDIT</button>
                                            <button className="btn btn-info m-4 mt-3"> SAVE</button>
                                            <button className="btn btn-success">BUILD APP</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
