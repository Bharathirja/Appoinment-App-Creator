// import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import React, { Component } from "react";
import axios from "axios";
import creatorApi from "../../api/creatorApi";


class EditMerchant extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shop_name: "",
            owner_name: "",
            email: "",
            mobile_number: "",
            address: "",
            gstnumber: "",
            titlebar_color: "",
            logo:"",
            background_image:"",
            icon_color:"",
            logo_preview:"",
            background_image_preview:""
        }
    }

    getMerchantDetails(id) {
        return creatorApi.getSingleDetails(id)

    }

    componentDidMount() {
        // console.log("Component Did Mount")
        // console.log(this.props.match.params.id)

        this.getMerchantDetails(this.props.match.params.id).then(res => {
            this.setState(res.data)
            this.setState({...this.state,
                logo_preview:res.data.logo,
                background_image_preview:res.data.background_image})
        }).catch(err => {
            console.log(err)
        })
       
    }

    onInputChange = e => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    logoChange = e => {
      this.setState({ ...this.state,
        logo:e.target.files[0],
        logo_preview:URL.createObjectURL(e.target.files[0])})
    }
    BgImageChange = e => {
        this.setState({ ...this.state,
            background_image:e.target.files[0],
            background_image_preview:URL.createObjectURL(e.target.files[0])})
    }

    update(data) {
        return creatorApi.updateMerchantDetails(data)
    }

    submitHandler = e => {
        e.preventDefault()
        const formData = new FormData()
        
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
        formData.append('id',this.props.match.params.id)

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
            id:this.props.match.params.id

        }
        
        this.update(details).then(res => {
            console.log(res)
            alert("Updated Successfully")
        }).catch(err => {
            console.log(err)
    })
    
  };

    render() {
        const {  shop_name,
        owner_name,
        email,
        mobile_number,
        address,
        gstnumber,
        titlebar_color,
        logo,
        background_image,
        icon_color,logo_preview, background_image_preview } = this.state

        return (
            

      <div>
          <Navbar/>
    <div className="container">
      <div className="shadow p-3 mb-5 bg-white">
       
       <div className="row">

<div className="col-md-9">
    <h6 className="mb-3 font-weight-bold">EDIT MERCHANT DETAILS</h6>
    <hr />
    <form onSubmit={this.submitHandler}>
        <div className='row'>

            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Shop Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="shop_name"
                    value={shop_name}
                    onChange={e => this.onInputChange(e)}
                />
                
            </div>

            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Owner Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="owner_name"
                    value={owner_name}
                    onChange={e => this.onInputChange(e)}
                />
               
            </div>

            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Mobile Number</label>
                <input
                    type="text"
                    className="form-control"
                    name="mobile_number"
                    value={mobile_number}
                    onChange={e => this.onInputChange(e)}
                />
               
            </div>
           
            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Email</label>
                <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={e =>this.onInputChange(e)}
                />
               
            </div>

        </div>

        <div className='row'>
            
            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Address</label>
                <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={e => this.onInputChange(e)}
                >
                </textarea>
                
            </div>

            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>GST Number</label>
                <input
                    type="text"
                    className="form-control"
                    name="gstnumber"
                    value={gstnumber}
                    onChange={e => this.onInputChange(e)}
                />
               
            </div>

            <div className="col-md-3 mb-3">
                <label  className='font-weight-bold'>Title bar color</label>
                <select className="form-control" id="state" value={titlebar_color} onChange={(e) => this.setState({ ...this.state,titlebar_color: e.target.value })}>
                    <option value="">Choose...</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
               
            </div>
            
            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Logo</label>
                <input
                    type="file"
                    name="logo"
                    onChange={e => this.logoChange(e)}
                />
            </div>

        </div>

        <div className='row'>

            <div className="col-md-3 mb-3">
                <label className='font-weight-bold'>Background Image</label>
                <input
                    type="file"
                    name="background_image"
                    onChange={e => this.BgImageChange(e)}
                />
            </div>

            <div className="col-md-3 mb-3">
                <label  className='font-weight-bold'>Icon color</label>
                <select className="form-control" id="state" value={icon_color} onChange={(e) => this.setState({ ...this.state,icon_color: e.target.value })}>
                    <option value="">Choose...</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
               

            </div>
            
            <div className="col-md-6 mb-3">
                {/* <button className="btn btn-secondary" type="button" >EDIT</button> */}
                <button className="btn btn-info m-4 mt-3" type="submit"> UPDATE</button>
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
        <img src={logo_preview}/>
    </div>

    <div className="col-md-3 mb-3">
        <label>Background Image</label>
        <img src={background_image_preview}/>
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

export default EditMerchant



// const EditMerchant = () => {
//   let history = useHistory();
//   const { id } = useParams();
//   const [user, setUser] = useState({
//     shop_name: "",
//     owner_name: "",
//     email: "",
//     mobile_number: "",
//     address: "",
//     gstnumber: "",
//     titlebar_color: "",
//     logo:"",
//     background_image:"",
//     icon_color:""
//   });

  
//   const { shop_name, owner_name, email, mobile_number, address,gstnumber, titlebar_color,icon_color, logo, background_image } = user;
  
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   const logoChange = e => {
//       setUser({ ...user,logo:e.target.files[0]})
//   }
//   const BgImageChange = e => {
//     setUser({ ...user,background_image:e.target.files[0]})

//   }

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     // await axios.put(`http://35.154.175.250/appcreator/merchant-details-retrieve-and-update/${id}`, user).then(res =>{
//     //     console.log(res)
//     // }).catch(err => {
//     //     console.log(err)
//     // })
//     creatorApi.updateMerchantDetails(user).then(res => {
//         console.log(res)
//         alert("Updated Successfully")
//         history.push("/home");
//     }).catch(err => {
//         console.log(err)
//     })
    
//   };

//   const loadUser = async () => {
//     creatorApi.getSingleDetails(id).then(res => {
//         console.log(res)
//         setUser(res.data);
//     }).catch(err => {
//         console.log(err)
//     })
    
//   };
//   return (
//       <div>
//           <Navbar/>
//     <div className="container">
//       <div className="shadow p-3 mb-5 bg-white">
       
//        <div className="row">

// <div className="col-md-9">
//     <h6 className="mb-3 font-weight-bold">EDIT MERCHANT DETAILS</h6>
//     <hr />
//     <form onSubmit={e => onSubmit(e)}>
//         <div className='row'>

//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Shop Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="shop_name"
//                     value={shop_name}
//                     onChange={e => onInputChange(e)}
//                 />
                
//             </div>

//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Owner Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="owner_name"
//                     value={owner_name}
//                     onChange={e => onInputChange(e)}
//                 />
               
//             </div>

//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Mobile Number</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="mobile_number"
//                     value={mobile_number}
//                     onChange={e => onInputChange(e)}
//                 />
               
//             </div>
           
//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Email</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="email"
//                     value={email}
//                     onChange={e => onInputChange(e)}
//                 />
               
//             </div>

//         </div>

//         <div className='row'>
            
//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Address</label>
//                 <textarea
//                     type="text"
//                     className="form-control"
//                     name="address"
//                     value={address}
//                     onChange={e => onInputChange(e)}
//                 >
//                 </textarea>
                
//             </div>

//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>GST Number</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="gstnumber"
//                     value={gstnumber}
//                     onChange={e => onInputChange(e)}
//                 />
               
//             </div>

//             <div className="col-md-3 mb-3">
//                 <label  className='font-weight-bold'>Title bar color</label>
//                 <select className="form-control" id="state" value={titlebar_color} onChange={(e) => setUser({ ...user,titlebar_color: e.target.value })}>
//                     <option value="">Choose...</option>
//                     <option value="red">Red</option>
//                     <option value="green">Green</option>
//                 </select>
               
//             </div>
            
//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Logo</label>
//                 <input
//                     type="file"
//                     name="logo"
//                     onChange={e => logoChange(e)}
//                 />
//             </div>

//         </div>

//         <div className='row'>

//             <div className="col-md-3 mb-3">
//                 <label className='font-weight-bold'>Background Image</label>
//                 <input
//                     type="file"
//                     name="background_image"
//                     onChange={e => BgImageChange(e)}
//                 />
//             </div>

//             <div className="col-md-3 mb-3">
//                 <label  className='font-weight-bold'>Icon color</label>
//                 <select className="form-control" id="state" value={icon_color} onChange={(e) => setUser({ ...user,icon_color: e.target.value })}>
//                     <option value="">Choose...</option>
//                     <option value="red">Red</option>
//                     <option value="green">Green</option>
//                 </select>
               

//             </div>
            
//             <div className="col-md-6 mb-3">
//                 {/* <button className="btn btn-secondary" type="button" >EDIT</button> */}
//                 <button className="btn btn-info m-4 mt-3" type="submit"> UPDATE</button>
//                 {/* <button className="btn btn-success" href="CMD.exe">BUILD APP</button> */}
//             </div>
//         </div>
//     </form>
// </div>

// <div className="col-md-3 font-weight-bold">
//     <h6 className="mb-3">PREVIEW</h6>
//     <hr/>

//     <div className="col-md-3 mb-3">
//         <label>Logo</label>
//         <img src={logo}/>
//     </div>

//     <div className="col-md-3 mb-3">
//         <label>Background Image</label>
//         <img src={background_image}/>
//     </div>
// </div>
// </div>

//       </div>
//     </div>
//     <Footer />
//     </div>
//   );
// };

// export default EditMerchant;


// class EditMerchant extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
                 
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <Footer />
                
//             </div>
//         )
//     }
// }

// export default EditMerchant
