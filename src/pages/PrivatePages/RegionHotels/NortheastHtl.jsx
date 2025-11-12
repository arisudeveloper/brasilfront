import React from 'react'
import Navbar from '../../../components/NavBar/NavBar'
import Languages from '../../../components/Languages/Languages'
import './Htl.css'

import { useTranslation } from "react-i18next";

import villa from '../../../assets/images/htl/salvador/VILLA-GALE-SALVADOR.PNG'
import novotel from '../../../assets/images/htl/salvador/NOVOTEL-RIO-VERMELHO.PNG'
import mercure from '../../../assets/images/htl/salvador/MERCURE-RIO-VERMELHO.PNG'
import fera from '../../../assets/images/htl/salvador/FERA-PALACE-SALVADOR.PNG'
import fasano from '../../../assets/images/htl/salvador/FASANO-SALVADOR.PNG'

import long from '../../../assets/images/htl/fortim/LONG-BEACH.PNG'
import jaguarindia from '../../../assets/images/htl/fortim/JAGUARINDIA-VILLAGE.PNG'
import jaguaribe from '../../../assets/images/htl/fortim/jaguaribe-lodge.PNG'

import carmel from '../../../assets/images/htl/cumbuco/CARMEL-CUMBUCO.PNG'
import duro from '../../../assets/images/htl/cumbuco/DURO-BEACH.PNG'
import sunset from '../../../assets/images/htl/cumbuco/SUNSET.PNG'
import galecumbuco from '../../../assets/images/htl/cumbuco/VILA-GALE-CUMBUCO.PNG'

import iberobahia from '../../../assets/images/htl/pdf/IBERO-STAR-BAHIA.PNG'
import iberopdf from '../../../assets/images/htl/pdf/IBEROSTAR-PRAIA-DO-FORTE.PNG'
import palladium from '../../../assets/images/htl/pdf/PALLADIUM-1.PNG'
import tivolipdf from '../../../assets/images/htl/pdf/TIVOLI-PDF.PNG'
import vilamares from '../../../assets/images/htl/pdf/VILA-GALE-MARES.PNG'
import wish from '../../../assets/images/htl/pdf/WISH.PNG'

const NortheastHtl = () => {
    const htlsalvador = [
        { img: villa, name: "Vila Galé Salvador", room: '224', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: novotel, name: "Novotel Rio Vermelho", room: '202', features: ['pool', 'beach', 'meet', 'rest', 'gym'] },
        { img: mercure, name: "Mercure Rio Vermelho", room: '174', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: fasano, name: "Fasano", room: '70', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
    ]

    const htlfortim = [
        { img: long, name: "Long Beach", room: '64', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: jaguarindia, name: "Jaguaríndia Village", room: '30', features: ['pool', 'spa', 'meet', 'rest'] },
        { img: jaguaribe, name: "Jaguaribe Lodge", room: '23', features: ['pool', 'spa', 'rest'] },
    ]

    const htlcumbuco = [
        { img: carmel, name: "Carmel Cumbuco", room: '88', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: galecumbuco, name: "Vila Galé Cumbuco", room: '537', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: sunset, name: "Vila Galé Collection Sunset", room: '116', features: ['pool', 'spa', 'rest', 'gym'] },
        { img: duro, name: "Duro Beach", room: '50', features: ['pool', 'spa', 'rest', 'gym'] },
    ]

    const htlpdf = [
        { img: iberobahia, name: "Iberostar Bahia", room: '623', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: iberopdf, name: "Iberostar Praia do Forte", room: '537', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: palladium, name: "Palladium", room: '654', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: tivolipdf, name: "Tivoli Praia do Forte", room: '287', features: ['pool',  'beach', 'meet', 'rest', 'gym'] },
        { img: vilamares, name: "Villa Galé Marés", room: '576', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: wish, name: "Wish", room: '284', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
    ]

    const { t } = useTranslation('infosHTL')

    return (
        <div>
            <Languages />
            <Navbar />
            <div className="app">
                <nav className="summary">
                    <ol id='1'>
                        <li><a href="#1">Salvador</a></li>
                        <li><a href="#2">Fortim</a></li>
                        <li><a href="#3">Cumbuco</a></li>
                        <li><a href="#4">Praia do Forte</a></li>
                    </ol>
                </nav>
            </div>

            <section className='galleryHtl'>
                <h1 id='1'>Salvador - Bahia </h1>
                {htlsalvador.map((hotel, index) => (
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

            <section className='galleryHtl'>
                <h1 id='2'>Fortim - Ceará </h1>
                {htlfortim.map((hotel, index) => (
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

            <section className='galleryHtl'>
                <h1 id='3'>Cumbuco - Ceará </h1>
                {htlcumbuco.map((hotel, index) => (
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

            <section className='galleryHtl'>
                <h1 id='4'>Praia do Forte</h1>
                {htlpdf.map((hotel, index) => (
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

export default NortheastHtl