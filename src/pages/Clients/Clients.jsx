import React from 'react'
import './Clients.css'
import Navbar from '../../components/NavBar/NavBar'
import Languages from '../../components/Languages/Languages'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from "react-i18next";

import abav from '../../assets/images/clients/abav.jpg'
import carbono from '../../assets/images/clients/carbono.png'
import brasil from '../../assets/images/clients/brasil.png'
import turismo from '../../assets/images/clients/turismo-respon.png'
import dmcmarket from '../../assets/images/clients/dmcmarket.png'
import dmc from '../../assets/images/clients/dmc.png'
import selectour from '../../assets/images/clients/selectour.jpg'
import carre from '../../assets/images/clients/carre.png'
import avasa from '../../assets/images/clients/avasa.png'
import cediv from '../../assets/images/clients/cediv.png'
import havas from '../../assets/images/clients/havas.png'
import iglta from '../../assets/images/clients/iglta.png'
import april from '../../assets/images/clients/april.jpg'
import atos from '../../assets/images/clients/atos.jpg'
import axa from '../../assets/images/clients/axa.jpg'
import hewlett from '../../assets/images/clients/hewlett.jpg'
import iiyama from '../../assets/images/clients/iiyama.jpg'
import nissan from '../../assets/images/clients/nissan.jpg'
import mercedes from '../../assets/images/clients/mercedes.jpg'
import michelin from '../../assets/images/clients/michelin.jpg'
import neopost from '../../assets/images/clients/neopost.jpg'
import loreal from '../../assets/images/clients/loreal.jpg'
import sanofi from '../../assets/images/clients/sanofi.jpg'
import toshiba from '../../assets/images/clients/toshiba.jpg'
import samsung from '../../assets/images/clients/samsung.jpg'
import servier from '../../assets/images/clients/servier.jpg'
import renault from '../../assets/images/clients/renault.jpg'
import volvo from '../../assets/images/clients/volvo.jpg'

const Clients = () => {
  const { t } = useTranslation("clients")

  return (
    <div>
      <Languages />
      <Navbar />
      <h2 className='titleClients'>{t("titleClients")}</h2>
      <section className='mainPageClients'>
        <section className='partners1'>
          <div>
            <p>{t("textClients.part1")}</p><br />
            <p>{t("textClients.part2")}</p><br />
            <p>{t("textClients.part3")}</p>
          </div>

          <div className='imgsPartners1'>
            <img src={brasil} alt="" />
            <img src={turismo} alt="" />
            <img src={abav} alt="" />
            <img src={carbono} alt="" />
          </div>
        </section>

        <section >
          <h2 className='titlePartners'>REFERENCED AND <strong>REPRESENTATIVES</strong></h2>
          <div className='imgsPartners2'>
            <img src={dmcmarket} alt="" />
            <img src={dmc} alt="" />
            <img src={carre} alt="" />
            <img src={selectour} alt="" />
            <img src={avasa} alt="" />
            <img src={havas} alt="" />
            <img src={cediv} alt="" />
            <img src={iglta} alt="" />
          </div>

          <h2 className='titlePartners'>THEY TRUST <strong>US</strong></h2>
          <div className='imgsPartners2'>
            <img src={april} alt="" />
            <img src={atos} alt="" />
            <img src={axa} alt="" />
            <img src={hewlett} alt="" />
            <img src={iiyama} alt="" />
            <img src={nissan} alt="" />
            <img src={mercedes} alt="" />
            <img src={michelin} alt="" />
            <img src={neopost} alt="" />
            <img src={loreal} alt="" />
            <img src={sanofi} alt="" />
            <img src={toshiba} alt="" />
            <img src={samsung} alt="" />
            <img src={servier} alt="" />
            <img src={renault} alt="" />
            <img src={servier} alt="" />
            <img src={volvo} alt="" />
          </div>
        </section>
      </section>
      <Footer/>
    </div>

  )
}

export default Clients
