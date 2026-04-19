import React from 'react';
function Awards() {
    return (
    <div className='container  mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>  
            <img src='media/images/largestBroker.svg' alt="largest broker" />
            </div>
            <div className='col-6 p-5 mt-2'>
                <h1>Largest Stock Broker in INDIA</h1>
                <p className='mb-5'>2+Million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in it.</p>
                <div className='row '>
                    <div className='col-6'>
                        <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p>Commodity Derivatives </p>
                    </li>
                    <li>
                        <p>Currency Derivatives</p>
                    </li>
                </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                    <li>
                        <p>Stocks and IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds </p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities</p>
                    </li>
                </ul>
                    </div>
               
</div>
<img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
                
            
               
        </div>
    </div>
    );
}

export default Awards;