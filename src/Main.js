import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./views/Home";
import Tabone from "./views/Tabone";
import Tabtwo from "./views/Tabtwo";
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>WebSite Topic</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/tabone">TabOne</NavLink></li>
              <li><NavLink to="/tabtwo">TabTwo</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/tabone" component={Tabone}/>
              <Route path="/tabtwo" component={Tabtwo}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
  
 
export default Main;