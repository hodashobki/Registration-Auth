import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Login from "./Components/Login";
import Register from "./Components/Register";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Register" component={Register}/>
    
    
    {/* <UnPrivateRoute path="/login" component={Login}/> */}
    {/* <UnPrivateRoute path="/register" component={Register}/>
    <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
    <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/> */}
  </Router>
  );
}

export default App;
