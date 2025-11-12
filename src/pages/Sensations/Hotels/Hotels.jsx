import sub6 from "../../../assets/images/sensations/sub6.png";
import htl1 from "../../../assets/images/sensations/htl1.png";
import htl2 from "../../../assets/images/sensations/htl2.png";
import htl3 from "../../../assets/images/sensations/htl3.png";
import htl4 from "../../../assets/images/sensations/htl4.png";
import htl5 from "../../../assets/images/sensations/htl5.png";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Languages from "../../../components/Languages/Languages";
import "../Sensations.css"

// Lista das imagens locais
const novasImagens = [
  { img: htl1, title: "Imagem 1" },
  { img: htl2, title: "Imagem 2" },
  { img: htl3, title: "Imagem 3" },
  { img: htl4, title: "Imagem 4" },
  { img: htl5, title: "Imagem 5" },
];

const Hotels = () => {
  const { t } = useTranslation("hotels");

  return (
    <>
      <Languages/>
      <Navbar />
      <h2 className="titleAbout">
        {t("titlePart1")} <span>{t("titlePart2")}</span>
      </h2>
      <div className="sub-sensations">
        <img src={sub6} alt="" style={{ width: "100%", height: "auto" }} />
        <div className="info-sub-sensations">
          <h1>
            {t("mainTitle")} <br /><span>{t("subTitle")}</span>
          </h1>
          <p>{t("description")}</p>

          <div className="galeria">
            {novasImagens.map((item, index) => (
              <img key={index} src={item.img} alt={item.title} />
            ))}
          </div>
        </div>

        <Link to="/sensations">
          <button className="btnSensations">{t("buttonMore")}</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Hotels;
