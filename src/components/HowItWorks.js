import React from 'react';

function HowItWorks() {
  const img_src = process.env.PUBLIC_URL + '/work-flow.png'
  return (
    <div id="how-it-works" className="text-center py-10 bg-white text-black " style={{marginTop:"100px"}}>
      <h1 className="text-2xl font-bold" style={{textAlign: 'center'}}>How It Works</h1>
      <p className="mt-4" style={{fontSize: '1.375rem', textAlign: 'center'}}>Just upload your photo, choose your favorite dress, and see how it looks on you!</p>

          <p className="mt-4" style={{ fontSize: '1.375rem', textAlign: 'center', color: 'blueviolet' }}> <i> "Securing Your Moments: Processed Privately, Never Stored." </i> </p>
      <img src={img_src} alt="App Screenshot" className='howitworks' style={{ maxWidth: '90%', margin: '25px', height: '120%', alignContent: 'center', alignItems: 'center' }} />
    </div>
  );
}

export default HowItWorks;  
