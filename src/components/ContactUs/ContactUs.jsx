import React from 'react'
import Languages from '../Languages/Languages'
import './ContactUs.css'
import brasil from "../../assets/images/clients/brasil.png"

const ContactUs = () => {
  return (
    <footer id='footerContact' className='contactus-wrapper'>
      <section className='sec1footerContact'>
        <h3>CONTACT US</h3>
        <ul>
          <li>Email: contact@brazilsensations.com</li>
          <li>Phone: +55 21 3264 1902</li>
          <li>Av. Rio Branco, 100 - Centro</li>
        </ul>
      </section>

      <section >
        <img src={brasil} alt="" className='imgBrasil'/>
      </section>

      <section className='sec2footerContact'>
        <p>BRAZIL <span>SENSATIONS</span></p>
      </section>

      
    </footer>
  )
}

export default ContactUs