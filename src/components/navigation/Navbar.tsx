import React from 'react';
import {Link} from "react-router-dom";
import Router from "./Router";
import "./Navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <Link to="/Main">Main</Link>
            <Link to="/Account">Account</Link>
            <Router/>
        </div>
    );
};

export default Navbar;