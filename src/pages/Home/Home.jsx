import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import LangCompact from '../../components/LangCompact/LangCompact';

import './Home.css';

import home1 from '../../assets/images/home/home1.png';
import home2 from '../../assets/images/home/home2.png';
import home4 from '../../assets/images/home/home4.png';
import logo from '../../assets/images/home/logo.png';

import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHome = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    { id: '1', image: home1, title: 'Brazil Sensations', text: 'subtitleHome1' },
    { id: '2', image: home2, title: 'Brazil Sensations', text: 'subtitleHome2' },
    { id: '3', image: home4, title: 'Brazil Sensations', text: 'subtitleHome3' },
  ];

  const { t } = useTranslation('home');

  return (
    <div className="containerHome">
      <LangCompact/>
      {/* MENU */}
      <div className={`nav-linksHome ${isOpen ? 'activeHome' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/aboutus" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link to="/sensations" onClick={() => setIsOpen(false)}>
          Sensations
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/clients" onClick={() => setIsOpen(false)}>
          Clients
        </Link>
        <Link to="/experiences" onClick={() => setIsOpen(false)}>
          Experiences
        </Link>
        <Link to="/iglta" onClick={() => setIsOpen(false)}>
          IGLTA
        </Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>
          Login
        </Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>
          Register
        </Link>
        
 
      </div>

      {/* ÍCONE HAMBÚRGUER */}
      <div className="hamburgerHome pulse-icon" onClick={toggleMenuHome}>
        {isOpen ? (
          <CloseIcon
            style={{
              fontSize: 40,
              backgroundColor: 'white',
              color: '#084b71',
              padding: '5',
              borderRadius: '20px',
              marginBottom: '5px',
            }}
          />
        ) : (
          <MenuIcon
            style={{
              fontSize: 40,
              backgroundColor: 'white',
              color: '#084b71',
              padding: '5',
              borderRadius: '20px',
            }}
          />
        )}
      </div>

      {/* SLIDER */}
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="" className="slide-item fade-in" />
            <div className="slide-title">
              <img src={logo} alt="Logo" id="logoHome" className="fade-in" />
              <h3 className='subtitleHome fade-in2'>{t(item.text)}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ContactUs />
    </div>
  );
};

export default Home;
