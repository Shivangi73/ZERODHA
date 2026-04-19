import React from 'react';
function Brokrage() {
    return ( <div className='container '> 
        
                 <div className='row p-5 mt-5 border-top text-center '>
        
               
             <div className=' col-8 p-4'>
                <a href='' style={{textDecoration:"none"}}>
                    <h3 className='fs-5'>Charges explained</h3>
      </a>
                    <ul style={{ textAlign:"left",lineHeight:"2.5",fontSize:"13px"}} className='text-muted '>
<li>Call & trade

Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>

<li>Account with debit balance

If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

<li>Securities/Commodities transaction tax

Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</li>
<li>
    BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
</li>
                    </ul>
          

             </div>
             <div className=' col-4 p-4'>
                <a href='' style={{textDecoration:"none"}}> 
                    <h3 className='fs-5'>List of charges</h3>
                </a>

             </div>
            
            




             

             </div>
          

          
         </div> );
}

export default Brokrage;
