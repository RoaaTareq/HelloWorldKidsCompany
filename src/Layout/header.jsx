import React ,{ Component} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './CSS/header.css'
import Logo from '../assets/images/Home/Logo.png'
import Home from '../App'
import About from '../About-us/AboutTeam'
class Header extends Component {
  

 
    render() {
      return (
       
    <>
     <header className="header-bg">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img src={Logo} alt="Hello World Kids" className="logo-img" />
                    </div>
                    <div>
                        <ul className="main-list">
                            <li className="list">Home</li>
                            <li className="list">About</li>
                            <li className="list">Product&Service</li>
                            <li className="list">Join Our Mission</li>
                            <li className="list">Blogs</li>
                            <li className="list">Contact Us</li>
                            <li className="list">Engilsh</li>
                        </ul>
                    </div>
                    <div className="">
                        <button className="btn-community">Join Our Community</button>
                    </div>
                </div>
            </div>
        </header>
    </>
      );
    }
  }

export default Header;
