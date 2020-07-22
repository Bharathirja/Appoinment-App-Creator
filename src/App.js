import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Pages/Login.js';

function App() {
  
  return (
    // <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Login}/>
      
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about" component={About}/>
      {/* <Route exact  path="/" component={Login}/> */}


      </Switch>
      <Footer />
    </div>
    // </Router>
    
  );
}

export default App;
