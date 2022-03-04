import React from 'react';
import {Link} from "react-router-dom";
import Router from "../components/navigation/Router";
import './Header.css';
// @ts-ignore
import alerts from '../assets/main1/Group 6.png';
// @ts-ignore
import can from '../assets/main1/Group 9.png';
// @ts-ignore
import logo from '../assets/main1/Logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="nav_links">
                    <Link className="h_text" to="/">
                        <img  src={alerts} alt="alerts"/>
                    </Link>
                    <Link className="h_text" to="/">
                        <img src={can} alt="can"/>
                    </Link>
                    <Link className="h_text" to="/Menu">Menu</Link>
                    <Link className="h_text"to="/Catalog">Catalog</Link>
                    <Link className="h_text"to="/Contacts">Contacts</Link>
                </div>
            </div>


            <Router/>
        </div>
    );
};

export default Header;