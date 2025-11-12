import Languages from '../../../components/Languages/Languages'
import Navbar from '../../../components/NavBar/NavBar'
import '../Products/Prod.css'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const GRProd = () => {
    const { t } = useTranslation('productions')
    return (
        <div>
            <Languages />
            <Navbar />
            <section className='containerProd2'>
                <h1 style={{ width: "80%", backgroundColor: "#084b71", color: "white", padding: "10px" }}>{t('titleGroup')}</h1>
                <h2 className='titleProd'>{t('french')}</h2>
                <div className="langProd">

                    <div>
                        <ul>
                        </ul>
                    </div>

                </div>

                <h2 className='titleProd'>{t('english')}</h2>
                <div className="langProd">

                    <div>
                        <ul>
                          
                        </ul>
                    </div>

                </div>

                <h2 className='titleProd'>{t('spanish')}</h2>
                <div className="langProd">

                    <div>
                        <ul>
                            
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default GRProd