// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(
//   // <React.StrictMode>
//   <BrowserRouter>
//     <App />
//     </BrowserRouter>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from './routes.js';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import About from "./Pages/About";



import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';



const checkAccessToken = () => {
  let token = JSON.parse(sessionStorage.getItem("userToken"));
  if (token) {
    if (token) {
      return true;
    } else {
      return false;
    }
  } else return false;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAccessToken() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
    }
  />
);


ReactDOM.render(
        <HashRouter>
            <Switch>
              <Route exact path={ROUTES.LOGIN} component={Login} />
             
              <AuthRoute exact path={ROUTES.HOME} component={Home} />
              <AuthRoute exact path={ROUTES.ABOUT} component={About} />

             
            </Switch>
          </HashRouter>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

