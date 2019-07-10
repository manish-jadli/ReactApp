/* eslint-disable react/jsx-no-target-blank */

import React from 'react'
import { IntlProviderWrapper } from "./language/IntlContext";
import LanguageSwitch from "./language/languageSwitcher";
import { FormattedMessage } from "react-intl";
import { Link, NavLink} from 'react-router-dom';
import './App.css';
import Signup from '../src/app/admin/signup/signup';
import Login from '../src/app/admin/login/login';
import Routes from './routes/routes';


const activeStyle={color: "#ffc107"};

class App extends React.Component {
  render(){

  return (
    <section>
          <IntlProviderWrapper>
    <div className="App">  
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <Link className="navbar-brand text-warning" to="/"><span className="text-white">MjTech</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} exact to="/"><FormattedMessage id="Home" /></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} to="/service"><FormattedMessage id="Service" /></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} to="/courses"><FormattedMessage id="Courses" /></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} to="/about"><FormattedMessage id="About" /></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} to="/contact"><FormattedMessage id="Contact" /></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} to="/booking"><FormattedMessage id="Booking" /></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle={activeStyle} to="/stores"><FormattedMessage id="Store" /></NavLink>
      </li>
    </ul>
    <ul className="navbar-nav nav-light nav-right">
      <li className="nav-item">
        <a href="true" className="nav-link pointer" data-toggle="modal" data-target="#login"><i className="fa fa-sign-in"></i> <FormattedMessage id="Login" /></a>
      </li>
      <li className="nav-item">
        <a href="true" className="nav-link pointer" data-toggle="modal" data-target="#signup"><i className="fa fa-sign-out"></i> <FormattedMessage id="Signup" /></a>
      </li>
    </ul>
  </div>  
</nav>


  <Routes />


<div className="container">
<Login />
<Signup />
</div>

<br/>

<footer>
<div className="bg-dark fixed-footer">
<div className="container">
<div className="row col-12 form-group"></div>
<div className="row col-12">
  <div className="form-group col-4">
    <h2 className="text-white">Home Screen:</h2>
    <ul className="list-unstyled">
    <li><Link className="text-white" to="/" title="Home"><i className="fa fa-home"></i> <FormattedMessage id="Home" /></Link></li>
    <li><Link className="text-white" to="/service" title="Service"><i className="fa fa-cog"></i> <FormattedMessage id="Service" /></Link></li>
    <li><Link className="text-white" to="/about" title="About"><i className="fa fa-adjust"></i> <FormattedMessage id="About" /></Link></li>
    <li><Link className="text-white" to="/contact" title="Contact"><i className="fa fa-phone"></i> <FormattedMessage id="Contact" /></Link></li>
    </ul>
  </div>

  <div className="form-group col-4">
    <h2 className="text-white">Data Link:</h2>
    <ul className="list-unstyled">
    <li><a href="true" className="text-white" title="Home" data-toggle="modal" data-target="#login"><i className="fa fa-sign-in"></i> <FormattedMessage id="Login" /></a></li>
    <li><a href="true" className="text-white" title="Service" data-toggle="modal" data-target="#signup"><i className="fa fa-sign-out"></i> <FormattedMessage id="Signup" /></a></li>
    </ul>
  </div>

  <div className="form-group col-4">
    <h2 className="text-white">Social Link:</h2>
    <ul className="list-unstyled">
    <li><a className="text-white" target="_blank" href="http://www.facebook.com" title="Facebook"><i className="fa fa-facebook"></i> <FormattedMessage id="Facebook" /></a></li>
    <li><a className="text-white" target="_blank" href="http://www.twitter.com" title="Twitter"><i className="fa fa-twitter"></i> <FormattedMessage id="Twitter" /></a></li>
    <li><a className="text-white" target="_blank" href="http://www.gmail.com" title="Gmail"><i className="fa fa-envelope-o"></i> <FormattedMessage id="Gmail" /></a></li>
    <li><a className="text-white" target="_blank" href="http://www.whatsapp.com" title="Whatsapp"><i className="fa fa-whatsapp"></i> <FormattedMessage id="Whatsapp" /></a></li>
    <li><a className="text-white" target="_blank" href="http://www.pinterest.com" title="Pinterest"><i className="fa fa-pinterest"></i> <FormattedMessage id="Pinterest" /></a></li>
    <li><a className="text-white" target="_blank" href="http://www.instagram.com" title="Instagram"><i className="fa fa-instagram"></i> <FormattedMessage id="Instagram" /></a></li>
    </ul>
  </div>
</div>
<hr/>
<div className="col-12">
<LanguageSwitch />
</div>
<hr/>
<div className="text-center text-white">&copy; 2019 Copyright by <span className="text-warning">MjTech</span> HighTech Pvt Ltd. All right reserved.</div>
<br/>
</div>
</div>
</footer>
    </div>
  </IntlProviderWrapper>

</section>

  );
}
}

export default App;
