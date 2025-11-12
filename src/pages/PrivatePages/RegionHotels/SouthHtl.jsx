import React from 'react'
import Navbar from '../../../components/NavBar/NavBar'
import Languages from '../../../components/Languages/Languages'
import './Htl.css'

import { useTranslation } from "react-i18next";

import belmonte from "../../../assets/images/htl/foz/BELMONTE.png"
import doubletree from "../../../assets/images/htl/foz/DOUBLETREE.png"
import carima from "../../../assets/images/htl/foz/CARIMA.png"
import melia from "../../../assets/images/htl/foz/MELIA.png"
import loi from "../../../assets/images/htl/foz/LOI-SUITE.png"
import recanto from "../../../assets/images/htl/foz/RECANTO.png"
import sanma from "../../../assets/images/htl/foz/SANMA.png"
import viale from "../../../assets/images/htl/foz/VIALE.png"
import vivaz from "../../../assets/images/htl/foz/VIVAZ.png" 

const SouthHtl = () => {
    const htlFoz = [
        { img: belmonte, name: "Belmonte das Cataratas", room: '176', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: doubletree, name: "Doubletree by Hilton", room: '250', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: carima, name: "Grand Carimã", room: '224', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: melia, name: "Grand Meliá", room: '186', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: loi, name: "Loi Suite", room: '162', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: recanto, name: "Recanto Park", room: '500', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: sanma, name: "Sanma", room: '117', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: viale, name: "Viale Cataratas", room: '199', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: vivaz, name: "Vivaz Cataratas", room: '170', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },

    ]

    const { t } = useTranslation('infosHTL')

    return (
        <div>
            <Languages />
            <Navbar />
            <div className="app">
                <nav className="summary">
                    <ol id='1'>
                        <li><a href="#1">Foz do Iguaçu</a></li>
                        
                    </ol>
                </nav>
            </div>

            <section className='galleryHtl'>
                <h1 id='1'>Foz do Iguaçu</h1>
                {htlFoz.map((hotel, index) => (
                    <div className='cardshtl' key={index}>
                        <h2 className='namehtl'>{hotel.name}</h2>
                        <img src={hotel.img} alt={hotel.name} />
                        <section className='roomsHtl'>
                            <span>{hotel.room}</span> {t('rooms')}
                        </section>
                        <ul className='itensHotel'>
                            {hotel.features.map((feat, i) => (
                                <li key={i}>{t(feat)}</li>
                            ))}
                        </ul>
                        <section className="divisorhtl"></section>
                    </div>
                ))}
            </section>

        </div>
    )
}

export default SouthHtl