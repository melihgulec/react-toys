import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Toys(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className="Content">
                <p>Toys page</p>
            </div>
        </div>
    );
}

export default Toys;