import React, {useEffect} from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

function Toys(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });
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