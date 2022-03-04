import React from 'react';
import './Main1.css';
import Header from "../../layout/Header";

const Main1 = () => {
    return (
        <div className="first_page">
            <Header/>
            <div className="cheer_block">
             <div className="tree"></div>
             <div className="cheer_text">
                <p className="cheer">CHEER UP! <hr/></p>
                 <div className="cheer1">Cheer up! Order coffee from us and <br/> take it with you</div>
             </div>
            </div>
        </div>
    );
};

export default Main1;