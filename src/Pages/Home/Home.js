import React, { Component} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css'
import {Link} from 'react-router-dom'

import creatorApi from "../../api/creatorApi";


class Home extends Component {
    constructor(props) {
        super(props)

        // State Initially
        this.state = {
            details:[]
        }

    }
    

    componentDidMount() {
        this.getMerchantDetails().then(res => {
            console.log(res)
            let details = res.data
            this.setState({
                details:details
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    getMerchantDetails() {
        return creatorApi.getCreatorDetails()

    }

    render() {

        // Else return home page
        return (
            <div>
                {/* Top Nav Bar */}
                <Navbar />
                {/* End */}
                
              <div className="container">
                <div className="py-4">
                    <h5>Merchants</h5>
                    <table className="table border shadow">
                    <thead >
                        <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Shop Name</th>
                        <th scope="col">Merchant Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.details.map((merchant, index) => (
                        <tr key={merchant.id}>
                            {/* <th scope="row">{index + 1}</th> */}
                            <td>{merchant.shop_name}</td>
                            <td>{merchant.owner_name}</td>
                            <td>{merchant.mobile_number}</td>
                            <td>{merchant.email}</td>
                            <td>
                            <Link  to="/merchant-details"> 
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>

                            </Link> 
                            <Link
                                // className="btn btn-outline-primary mr-2"
                                to={"/merchant/edit/"+merchant.id}
                            >
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"5px"}}>
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </Link>
                            <Link to="/home">
                            <svg width="1em" height="1em" style = {{marginLeft:"5px"}} viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"/>
                                <path fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"/>
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"/>
                            </svg>
                            </Link>
                            
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                        
            </div>
  
                <Footer />
            </div>
        )
    }
}

export default Home
