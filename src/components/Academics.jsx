import React from 'react';
import sehs from '../resources/images/TDTA 2.jpg';
import mdh from '../resources/images/mdh.jpeg';
import nr from '../resources/images/nr.jpg';
import '../resources/css/aca.css';


function Academics() {
  return (
    <div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="animated-background" style={{ marginBottom: '20px' }} >
            <h1 style={{ textAlign: 'center', color: 'black', fontFamily:'Lobster, cursive' }}>School</h1>
            <img alt="sehs" src={sehs} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h2 className='fonts'>Studied in SMT Eshwaramma High School</h2>
            <h2 className='fonts'>Address: Vidhya Giri Road, Puttaparthi</h2>
          </div>
          <div className="animated-background" style={{ marginBottom: '20px' }}>
            <h1 style={{ textAlign: 'center', color: 'black', fontFamily: 'Lobster, cursive' }}>Inter College</h1>
            <img alt="narayana" src={nr} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h2 className='fonts'>Studied in Narayana</h2>
            <h2 className='fonts'>Address: Somuladhoddi, Ananthapur</h2>
          </div>
          <div className="animated-background" style={{ marginBottom: '20px' }} >
            <h1 style={{ textAlign: 'center', color: 'black', fontFamily:'Lobster, cursive' }}>School</h1>
            <img alt="" src={mdh} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h2 className='fonts'>Studying in SSSIHL, Muddenahalli Campus</h2>
            <h2 className='fonts'>Address: Muddenahalli, beside LST, Chikballapur</h2>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Academics;

