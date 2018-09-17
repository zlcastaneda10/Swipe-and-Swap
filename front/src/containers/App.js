import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Button
} from 'reactstrap';
import '../styles/styles.css';

export default class App extends React.Component {
  render() {
    console.log(localStorage.getItem('user'));
    if(!localStorage.getItem('token')) {
      return (
        <div>
          <Navbar color="dark" className="fixed-top navbar-dark bg-dark">
            <NavbarBrand href="/" className="merienda">Swipe & Swap</NavbarBrand>
            <Button onClick={()=>{window.location = '/signIn';}} className="ml-auto nav_btn">Sign In</Button>
            <Button onClick={()=>{window.location = '/signUp';}} className="nav_btn">Sign Up</Button>
          </Navbar>
          <div className="content">
            {this.props.children}
          </div>
          <footer className="bg-dark">
            <div className="footer_makers">Por Juan Camilo Useche y Zulma Castañeda</div>
            <img className="MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" alt= "MIT license logo"/>
          </footer>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar color="dark" className="fixed-top navbar-dark bg-dark">
            <NavbarBrand href="/" className="merienda">Swipe & Swap</NavbarBrand>
	        <Button outline color="danger" onClick={()=>{ localStorage.clear();
              window.location = '/';}} className="ml-auto nav_btn">Sign Out</Button>
            <Button outline color="danger" onClick={()=>{ window.location.assign('/cards');}}
              className="nav_btn">Browse Items</Button>
            <Button outline color="danger" onClick={()=>{ window.location.assign('/AddObjects');}}
              className="nav_btn">Add an Item</Button>
          </Navbar>
          <div className="content">
            {this.props.children}
          </div>
          <footer className="bg-dark">
            <div className="footer_makers">Welcome and have fun trading! </div>
            <div className="footer_makers">Por Juan Camilo Useche y Zulma Castañeda</div>
            <div className="footer_license">MIT License</div>
          </footer>
        </div>
      );
    }
  }
}
