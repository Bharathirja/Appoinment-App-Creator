import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';



import creatorApi from "../../api/creatorApi";

class NewMerchant extends Component {
    constructor(props) {
        super(props)

        // State Initially
        this.state = {
            shop_name:"",
            owner_name:"",
            mobile_number:"",
            email:"",
            address:"",
            gstnumber:"",
            titlebar_color:"",
            background_image:"",
            icon_color:"",
            logo:"",
            background_image_preview:'',
            logo_preview:'',
            // loggedIn
        }

        this.BgIChange = this.BgIChange.bind(this)
        this.logoChange = this.logoChange.bind(this)
    }

    
    

    // Background image change
    BgIChange(event) {
        this.setState({
            background_image_preview:URL.createObjectURL(event.target.files[0]),
            background_image: event.target.files[0]
        })
    }

    // Logo image change
    logoChange(event) {
        this.setState({
            logo_preview:URL.createObjectURL(event.target.files[0]),
            logo:event.target.files[0]
        })
    }

    // This handler using for every input Value changing
    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    creator(creatorDetails) {
        return creatorApi.creatorInsert(creatorDetails)
    }


    // Submit form
    submitHandler = e => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('shop_name',this.state.shop_name)
        formData.append('owner_name',this.state.owner_name)
        formData.append('mobile_number', this.state.mobile_number)
        formData.append('email', this.state.email)
        formData.append('address', this.state.address)
        formData.append('gstnumber', this.state.gstnumber)
        formData.append('titlebar_color', this.state.titlebar_color)
        formData.append('background_image', this.state.background_image)
        formData.append('icon_color', this.state.icon_color)
        formData.append('logo', this.state.logo)

        const details = {
            shop_name:this.state.shop_name,
            owner_name:this.state.owner_name,
            mobile_number:this.state.mobile_number,
            email:this.state.email,
            address:this.state.address,
            gstnumber:this.state.gstnumber,
            titlebar_color:this.state.titlebar_color,
            background_image:this.state.background_image,
            logo:this.state.logo,

        }
        // const toekn = sessionStorage.getItem("userToken")
        // const config = {
        //     "Content-Type": "application/json",
        //     Authorization: "aPPointmentaPPCreator " + toekn
        // }
        // axios.post("http://35.154.175.250/appcreator/merchant-details-insert", details,config).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })

        // Data post API
        this.creator(formData)
        .then(res => {
            let data = res.data
            console.log(data);
            alert("Merchant Details Inserted Successfully!")
            
        }).catch(err => {
            console.log(err)
            // alert(err)
        });



    }

    render() {

        // Declared here state keys using for inputs values
        const { shop_name,
        owner_name,
        mobile_number,
        email,
        address,
        gstnumber,} = this.state
        

        // Else return home page
        return (
            <div>
                {/* Top Nav Bar */}
                <Navbar />
                {/* End */}
                
                <div className="container" >

                    <div className="shadow p-3 mb-5 bg-white">

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
                                                name="shop_name" 
                                                placeholder = "Merchant Name" 
                                                value = {shop_name}
                                                onChange={this.changeHandler}
                                            />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Owner Name</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="owner_name" 
                                                placeholder = "Owner Name"
                                                value = {owner_name}
                                                onChange = { this.changeHandler }
                                            />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Mobile Number</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="mobile_number" 
                                                placeholder = "Mobile Number"
                                                value = {mobile_number}
                                                onChange = { this.changeHandler }
                                            />
                                        </div>
                                       
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Email</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="email" 
                                                placeholder = "Email"
                                                value = {email}
                                                onChange = { this.changeHandler }
                                            />
                                        </div>

                                    </div>

                                    <div className='row'>
                                        
                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>Address</label>
                                            <textarea 
                                                className="form-control" 
                                                name="address"
                                                value = {address}
                                                onChange = { this.changeHandler }
                                                >
                                            </textarea>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label className='font-weight-bold'>GST Number</label>
                                            <input 
                                                type='text' 
                                                className="form-control" 
                                                name="gstnumber" 
                                                placeholder = "GST Number"
                                                value = {gstnumber}
                                                onChange = { this. changeHandler}
                                            />
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label  className='font-weight-bold'>Title bar color</label>
                                            <select className="form-control" id="state" onChange={(e) => this.setState({ titlebar_color: e.target.value })}>
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
                                            <select className="form-control" id="state" onChange={(e) => this.setState({icon_color:e.target.value})}>
                                                <option value="">Choose...</option>
                                                <option value="red">Red</option>
                                            <option value="green">Green</option>

                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6 mb-3">
                                            {/* <button className="btn btn-secondary" type="button" >EDIT</button> */}
                                            <button className="btn btn-info m-4 mt-3" type="submit"> SAVE</button>
                                            {/* <button className="btn btn-success" href="CMD.exe">BUILD APP</button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-3 font-weight-bold">
                                <h6 className="mb-3">PREVIEW</h6>
                                <hr/>

                                <div className="col-md-3 mb-3">
                                    <label>Logo</label>
                                    <img src={this.state.logo_preview}/>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label>Background Image</label>
                                    <img src={this.state.background_image_preview}/>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            
             
            <Footer />
            </div>
        )
    }
}

export default NewMerchant
