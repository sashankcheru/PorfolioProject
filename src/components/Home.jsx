import React from 'react'
// import profile from '../resources/images/sas.jpg'
import hello from '../resources/images/8aa4595fb24b6ed585dddac4622b2445.gif'


import '../resources/css/home.css'

export default function Home() {
  return (
    <div  className="style" >
      <div >
         <img alt="hello" src={hello} className='hello'  ></img>
      </div>
      <div  className="my">
        <h3 > I am Cherukuri Sashank,</h3>
        <h2 > B.Sc. Computer Science Student. I like to explore new things.repairing things ,painting ,art and craft works are my intrests.
          
        </h2>
      </div>
        
    </div>
  )
}
