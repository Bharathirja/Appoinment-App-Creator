import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  
  return (
    // <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact  path="/" component={Home}/>


      </Switch>
      <Footer />
    </div>
    // </Router>
    
  );
}

export default App;
