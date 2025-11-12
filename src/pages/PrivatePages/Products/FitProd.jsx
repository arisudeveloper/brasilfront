import React, { use } from 'react'
import Languages from '../../../components/Languages/Languages'
import Navbar from '../../../components/NavBar/NavBar'
import '../Products/Prod.css'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const FitProd = () => {
    const { t } = useTranslation('productions')
    return (
        <div>
            <Languages />
            <Navbar />
            <section className='containerProd2'>
                <h1 style={{ width: "80%", backgroundColor: "#084b71", color: "white", padding: "10px" }}>{t('titleFit')}</h1>
                <h2 className='titleProd'>{t('french')}</h2>
                <div className="langProd">
                    <div>
                        <ul>
                            <li><Link to="https://www.dropbox.com/scl/fi/t9yt0a50k01ivjshwc33f/BRESIL-VERT-ET-JAUNE-FRA-2026.docx?rlkey=put74vya780elxtajycg50kut&st=gnbejgb8&dl=0" target='blank'>BRESIL VERT ET JAUNE</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/g9dxkssln4z1169jiibq5/ESCAPADA-CARIOCA-2026-FR-EURO.docx?rlkey=hgouhqya8qemxdi3hfltjn56c&st=7lt9zayh&dl=0" target='blank'>ESCAPADA CARIOCA</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/vtylo9jd4bg7vnw3wsi6l/GLAMOUR-TROPICAL-FR-2026.docx?rlkey=cjfvaek5ah24cq73aeq6gckan&st=v8wewh3x&dl=0" target='blank'>GLAMOUR TROPICAL</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/iakw4lq5ew3sncyxpxhib/TRIO-IRRESISTIBLE-7N8D-2026-FR-EUR.docx?rlkey=vvbswip7eot2zi5uv3ykjy2j0&st=9tb6ppho&dl=0" target='blank'>IRRESISTIBLE TRIO</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/68vf2mktutprd5oiowvqm/MODULE-REVEILLON-FR-EUR.docx?rlkey=d5vonvg827jg45z07ao1rdeoa&st=u8mbnhqf&dl=0">REVEILLON</Link></li>
                        </ul>
                    </div>

                </div>

                <h2 className='titleProd'>{t('english')}</h2>
                <div className="langProd">
                    <div>
                        <ul>
                            <li><Link to="https://www.dropbox.com/scl/fi/mmtguukgvnl15ta2ya9da/BRAZIL-GREEN-AND-YELLOW-ENG-2026.docx?rlkey=1duttv307zp319vg0ia90dpck&st=t1lzwu9b&dl=0" target='blank'>BRAZIL GREEN AND YELLOW</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/cblio8t3lt9u3vnufzicq/ESCAPADA-CARIOCA-2026-ENG-DOLAR.docx?rlkey=hvnoqve8fabvff0zd95zdn9jo&st=lv0wp5bw&dl=0" target='blank'>ESCAPADA CARIOCA</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/62p8pd1bqis7mqk92xiat/GLAMOUR-TROPICAL-ENG-2026.docx?rlkey=tby1rdi6h4wxx1gqqlgt3nq3p&st=6lo0ymtv&dl=0" target='blank'>GLAMOUR TROPICAL</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/fzgo6mw18grm0pn1fxbla/IRRESISTIBLE-TRIO-7N8D-2026-EN-USD.docx?rlkey=b93fktqores8qrj4u46gr07e0&st=vr9q0r1s&dl=0">IRRESISTIBLE TRIO</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/vgofdfincgvibmnxa0338/MODULE-REVEILLON-EN-USD.docx?rlkey=lj4gzj8t7je9mt6ku866ri2uh&st=n3jbad3w&dl=0">REVEILLON</Link></li>

                        </ul>
                    </div>

                </div>

                <h2 className='titleProd'>{t('spanish')}</h2>
                <div className="langProd">
                    <div>
                        <ul>
                            <li><Link to="https://www.dropbox.com/scl/fi/stj6i89st3pqumg63rzgw/BRASIL-VERDE-Y-AMARILLO-ESP-2026.docx?rlkey=njyi43b8qtfv9ww8bp71gnqwf&st=8mhkvevd&dl=0" target='blank'>BRASIL VERDE Y AMARILLO</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/6lxk6647ppvffqqjnzaho/ESCAPADA-CARIOCA-2026-ESP-DOLAR.docx?rlkey=bdnwsl0cj9jbz9lalyff2zf18&st=omufffkz&dl=0" target='blank'>ESCAPADA CARIOCA</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/4opsc7es8kkq7k8qg0nwd/GLAMOUR-TROPICAL-ESP-2026.docx?rlkey=leamyowrfu6dbzgzthlp8nzbu&st=t3ht5pjn&dl=0" target='blank'>GLAMOUR TROPICAL </Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/23x851onwzqjnb6ynb56g/TRIO-IRRESISTIBLE-7N8D-2026-ESP-USD.docx?rlkey=8v08nfn0rasf493t0g8c5lprw&st=f3106dxq&dl=0">TRIO IRRESISTIBLE</Link></li>

                            <li><Link to="https://www.dropbox.com/scl/fi/8kl8xok6i76243z2fnhlw/MODULE-REVEILLON-ES-USD.docx?rlkey=crlfkggrs0hj09t82eon1tomp&st=lyzryig7&dl=0">REVEILLON</Link></li>
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default FitProd