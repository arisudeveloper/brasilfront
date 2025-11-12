import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import iglta from "../../assets/images/iglta/iglta.png";
import mapa from "../../assets/images/iglta/mapa.jpg";
import Languages from '../../components/Languages/Languages';
import './Iglta.css';
import { useTranslation } from 'react-i18next';

const Iglta = () => {
  const { t } = useTranslation("iglta");

  return (
    <div className='mainIglta'>
      <Languages/>
      <Navbar/>
      
      <section className="hero-banner" id="banner-image">
        <h1 className="fade-in">{t("hero.title")}</h1>
        <h5 className="fade-in">{t("hero.subtitle")}</h5>
        <section className="logo-container">
          <img src={iglta} alt={t("hero.logoAlt")} id="logo-iglta" className="fade-in" />
        </section>
      </section>

      <main className="main-container">
        <section className="about-section">
          <div id="text-content">
            <h2>{t("about.title")}</h2><br />
            <p>{t("about.text")}</p>
          </div>
          <img src={mapa} alt={t("about.mapAlt")} id="image-map" />
        </section>

        <div className="parallax" id='north'>
          <h1>{t("regions.north.title")}</h1>
          <p>{t("regions.north.text")}</p>
        </div>

        <div className="parallax" id='northeast'>
          <p>{t("regions.northeast.text")}</p>
          <h1>{t("regions.northeast.title")}</h1>
        </div>

        <div className="parallax" id='central-west'>
          <h1>{t("regions.centralWest.title")}</h1>
          <p>{t("regions.centralWest.text")}</p>
        </div>

        <div className="parallax" id='southeast'>
          <p>{t("regions.southeast.text")}</p>
          <h1>{t("regions.southeast.title")}</h1>
        </div>

        <div className="parallax" id='southern'>
          <h1>{t("regions.southern.title")}</h1>
          <p>{t("regions.southern.text")}</p>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Iglta;
