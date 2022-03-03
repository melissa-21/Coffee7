import React from 'react';

import {Route, Routes} from 'react-router-dom';
import Main from "./Main";
import Account from "./Account";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="Main" element={<Main/>}/>
                <Route path="Account" element={<Account/>}/>
            </Routes>
        </div>
    );
};

export default Router;