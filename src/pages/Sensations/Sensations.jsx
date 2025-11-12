import s1 from "../../assets/images/sensations/1.png";
import s2 from "../../assets/images/sensations/2.png";
import s3 from "../../assets/images/sensations/3.png";
import s4 from "../../assets/images/sensations/4.png";
import s5 from "../../assets/images/sensations/5.png";
import s6 from "../../assets/images/sensations/6.png";
import "./Sensations.css";
import Navbar from "../../components/NavBar/NavBar";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Languages from '../../components/Languages/Languages';
import { useTranslation } from "react-i18next";

const Sensations = () => {
  const {t} = useTranslation("sensations")
  return (
    <div>
      <Languages/>
      <Navbar />
      <h2 className="titleAbout">{t('titleSensations')}</h2>
      <div className="sensations">
        <Link to="/sensations/grp-fit"><img src={s1} alt="GROUPS & INDIVIDUALS" title="GROUPS & INDIVIDUALS"/></Link>
        <Link to="/sensations/luxury"><img src={s2} alt="" /></Link>
        <Link to="/sensations/mice"><img src={s3} alt="" /></Link>
        <Link to="/sensations/exclusive"><img src={s4} alt="" /></Link>
        <Link to="/sensations/workation"><img src={s5} alt="" /></Link>
        <Link to="/sensations/hotels"><img src={s6} alt="" /></Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Sensations;