import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login.js';

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
