import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Universe from './Universe';
import Footer from '../Footer';
function Productspage() {
    return (
         <>
           
           <Hero/>

           <Leftsection 
           imageURL="media/images/kite.png"
           productName="Kite"
           productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
           tryDemo=""
           learnMore=""
           googlPlay=""
           appStore=""
           />
             <Rightsection 
              imageURL="media/images/console.png"
              productName="Console"
               productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                  learnMore=""
              />
           <Leftsection imageURL="media\images\coin.png"
           productName="Coin"
           productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           tryDemo=""
           learnMore=""
           googlPlay=""
           appStore=""
           />
             <Rightsection
              imageURL="media/images/kiteconnect.png"
              productName="Kite Connect API"
               productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                  learnMore=""/>
           <Leftsection imageURL="media/images/varsity.png"
           productName="Varsity mobile"
           productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
           tryDemo=""
           learnMore=""
           googlPlay=""
           appStore=""
           />
        <p className='text- center mt-5 mb-5'>
          Want to know more about our technology stack? Check out the Zerodha.tech blog.
        </p>
           <Universe/>
         
           </>
   
     );

}

export default Productspage;