import React from 'react';
import "./Layout.css";


const Layout = () => {
    return (
        <div className="footer">
            <div className="f_list">
            <p className="f_contacts">Contacts</p>
            <p className="f_cheer">
                Cheer up! Order coffee from<br/>
                us and take it with you
            </p>
            <p className="f_shop">Shop</p>
            <p className="f_address">Moscow, Street Eben’grad, house 11<br/>
                Saint Petersburg, Street name Dritmi’s, house 42
            </p>
            <p className="f_sub">subscribe to the newsletter</p>
            <input type="text" placeholder="Email:" className="f_input"/>
            <button className="f_b_sub">subscribe</button>
            </div>
        </div>
    );
};

export default Layout;