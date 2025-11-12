import React from 'react'
import Navbar from '../../../components/NavBar/NavBar'
import Languages from '../../../components/Languages/Languages'
import './Htl.css'

import { useTranslation } from "react-i18next";

import fasano from "../../../assets/images/htl/rio/FASANO.png"
import fairmont from "../../../assets/images/htl/rio/FAIRMONT.png"
import emiliano from "../../../assets/images/htl/rio/EMILIANO.png"
import arenaleme from "../../../assets/images/htl/rio/ARENA-LEME.png"
import copapalace from "../../../assets/images/htl/rio/COPACABANA-PALACE.png"
import arpoador from "../../../assets/images/htl/rio/ARPOADOR-INN.png"
import arenacopa from "../../../assets/images/htl/rio/ARENA-COPACABANA.png"
import arenaipa from "../../../assets/images/htl/rio/ARENA-IPANEMA.png"
import gallery from "../../../assets/images/htl/rio/M-GALLERY.png"
import novotel from "../../../assets/images/htl/rio/NOVOTEL.png"
import mercure from "../../../assets/images/htl/rio/GRAN-MERCURE.png"
import miramar from "../../../assets/images/htl/rio/MIRAMAR.png"
import hyatt from "../../../assets/images/htl/rio/GRAN-HYATT.png"
import janeiro from "../../../assets/images/htl/rio/JANEIRO.png"
import hilton from "../../../assets/images/htl/rio/HILTON.png"
import sheraton from "../../../assets/images/htl/rio/SHERATON.png"
import pestana from "../../../assets/images/htl/rio/PESTANA-RIO.png"
import porto from "../../../assets/images/htl/rio/PORTO-BAY.png"
import windsorca from "../../../assets/images/htl/rio/WINDSOR-CALIFORNIA.png"
import windsorle from "../../../assets/images/htl/rio/WINDSOR-LEME.png"
import windsorma from "../../../assets/images/htl/rio/WINDSOR-MARAPENDI.png"

import principe from "../../../assets/images/htl/paraty/POUSADA-DO-PRINCIPE.png"
import imperial from "../../../assets/images/htl/paraty/PORTO-IMPERIAL.png"
import marquesa from "../../../assets/images/htl/paraty/MARQUESA.png"
import ouro from "../../../assets/images/htl/paraty/DO-OURO.png"
import sandi from "../../../assets/images/htl/paraty/SANDI.png"
import literaria from "../../../assets/images/htl/paraty/LITERARIA.png"

import emilianosp from "../../../assets/images/htl/sp/EMILIANO-SP.png"
import fasanoitaim from "../../../assets/images/htl/sp/FASANO-ITAIM.png"
import fasanosp from "../../../assets/images/htl/sp/FASANO-SP.png"
import estanplaza from "../../../assets/images/htl/sp/GRAN-ESTANPLAZA.png"
import jw from "../../../assets/images/htl/sp/JW-MARRIOTT.png"
import portosp from "../../../assets/images/htl/sp/PORTO-BAY.png"
import tangara from "../../../assets/images/htl/sp/PALACIO-TANGARA.png"
import pestanasp from "../../../assets/images/htl/sp/PESTANA-SP.png"
import rosewood from "../../../assets/images/htl/sp/ROSEWOOD.png"
import tivoli from "../../../assets/images/htl/sp/TIVOLI-SP.png"
import unique from "../../../assets/images/htl/sp/UNIQUE.png"

const SoutheastHtl = () => {
    const htlrio = [
        { img: fasano, name: "Fasano", room: '89', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: fairmont, name: "Fairmont", room: '375', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: emiliano, name: "Emiliano", room: '90', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: arenaleme, name: "Arena Leme", room: '164', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: copapalace, name: "Copacabana Palace", room: '229', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: arpoador, name: "Arpoador Inn", room: '49', features: ['pool', 'spa', 'beach', 'rest', 'gym'] },
        { img: arenacopa, name: "Arena Copacabana", room: '135', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: arenaipa, name: "Arena Ipanema", room: '136', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: gallery, name: "M.Gallery", room: '43', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: novotel, name: "Novotel", room: '274', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: mercure, name: "Grand Mercure", room: '314', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: miramar, name: "Miramar", room: '200', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: hyatt, name: "Grand Hyatt", room: '420', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: janeiro, name: "Janeiro", room: '51', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: hilton, name: "Hilton", room: '545', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: sheraton, name: "Sheraton", room: '538', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: pestana, name: "Pestana", room: '247', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: porto, name: "Porto Bay", room: '117', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: windsorca, name: "Windsor Califórnia", room: '157', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: windsorle, name: "Windsor Leme", room: '223', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },
        { img: windsorma, name: "Windsor Marapendi", room: '487', features: ['pool', 'spa', 'beach', 'meet', 'rest', 'gym'] },

    ]

    const htlpty = [
        { img: principe, name: "Pousada do Príncipe", room: '35', features: ['pool', 'rest'] },
        { img: imperial, name: "Pousada Porto Imperial", room: '41', features: ['pool', 'rest', 'gym'] },
        { img: marquesa, name: "Pousada da Marquesa", room: '20', features: ['pool', 'spa', 'rest'] },
        { img: ouro, name: "Pousada do Ouro", room: '27', features: ['pool', 'spa', 'meet', 'rest'] },
        { img: sandi, name: "Sandi", room: '30', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: literaria, name: "Pousada Literária", room: '27', features: ['pool', 'spa', 'rest'] },
    ]

    const htlsp = [
        { img: emilianosp, name: "Emiliano", room: '56', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: fasanoitaim, name: "Fasano Itaim", room: '107', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: fasanosp, name: "Fasano São Paulo", room: '60', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: estanplaza, name: "Gran Estanplaza", room: '205', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: jw, name: "JW Marriott", room: '258', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: portosp, name: "L'Hotel By Porto Bay", room: '87', features: ['pool', 'spa','rest', 'gym'] },
        { img: tangara, name: "Palacio Tangará", room: '141', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: pestanasp, name: "Pestana", room: '191', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: rosewood, name: "Rosewood", room: '160', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: tivoli, name: "Tivoli", room: '218', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },
        { img: unique, name: "Unique", room: '80', features: ['pool', 'spa', 'meet', 'rest', 'gym'] },

    ]

    const { t } = useTranslation('infosHTL')

    return (
        <div>
            <Languages />
            <Navbar />
            <div className="app">
                <nav className="summary">
                    <ol id='1'>
                        <li><a href="#1">Rio de Janeiro</a></li>
                        <li><a href="#2">Paraty</a></li>
                        <li><a href="#3">São Paulo</a></li>
                    </ol>
                </nav>
            </div>

            <section className='galleryHtl'>
                <h1 id='1'>Rio de Janeiro</h1>
                {htlrio.map((hotel, index) => (
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
                <h1 id='2'>Paraty</h1>
                {htlpty.map((hotel, index) => (
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
                <h1 id='3'>São Paulo</h1>
                {htlsp.map((hotel, index) => (
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

export default SoutheastHtl