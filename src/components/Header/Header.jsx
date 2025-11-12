import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import fundoHeader from '../../assets/images/fundoHeader.png';


const Header = () => {
  return (
    <div>
      <NavBar/>
      <main style={{backgroundImage: `url(${fundoHeader})`}} className='mainHeader'>
        <h1 className='myfont'>EXPERIENCE THE AUTHENTIC BRAZIL</h1>
      </main>
    </div>
  )
}

export default Header
