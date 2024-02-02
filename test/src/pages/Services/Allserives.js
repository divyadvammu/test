import React from 'react'
import Header_two from '../../Common/Header_two';
import Services_top from './Services_top';
import Services_body from './Services_body';
import Footer from '../../Common/Footer';
import Copyright from '../../Common/Copyright';

function Allserives() {
  return (
    <div className="service">
    <Header_two/>
    <Services_top/>
    <Services_body/>
    <Footer/>
    <Copyright/>  
    </div>
  )
}

export default Allserives;
