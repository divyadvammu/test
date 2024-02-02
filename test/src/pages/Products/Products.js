import React from 'react'
import Header_two from '../../Common/Header_two'
import Products_top from './Products_top'
import Footer from '../../Common/Footer'
import Copyright from '../../Common/Copyright'
import Products_body from './Products_body'

export default function Products() {
  return (
    <div>
      <Header_two/>
      <Products_top/>
      <Products_body/>
      <Footer/>
      <Copyright/>
    </div>
  )
}
