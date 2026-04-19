import React from "react";

function Leftsection({imageURL, productName, productDiscription, tryDemo, learnMore, googlPlay, appStore}) {

  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-6'>
          <img src={imageURL}/>
        </div>

        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>

          <p>{productDiscription}</p>

          <a href={tryDemo}>Try Demo</a>

          <a href={learnMore} style={{marginLeft:"50px"}}>
            Learn more
          </a>
          <div className="mt-3">
            

          <a href={googlPlay}>
            <img src='media/images/googlePlayBadge.svg'/>
          </a>

          <a href={appStore} >
            <img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}/>
          </a>
</div>
        </div>

      </div>
    </div>
  );
}

export default Leftsection;