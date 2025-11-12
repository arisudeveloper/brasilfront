import sub5 from "../../../assets/images/sensations/sub5.png";
import work1 from "../../../assets/images/sensations/work01.png";
import work2 from "../../../assets/images/sensations/work02.png";
import work3 from "../../../assets/images/sensations/work03.png";
import work4 from "../../../assets/images/sensations/work04.png";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../Sensations.css"
import Languages from "../../../components/Languages/Languages";

// Lista das imagens locais
const novasImagens = [
  { img: work1, title: "Imagem 1" },
  { img: work2, title: "Imagem 2" },
  { img: work3, title: "Imagem 3" },
  { img: work4, title: "Imagem 4" },
];

const Workation = () => {
  const { t } = useTranslation("workation");

  return (
    <>
      <Languages/>
      <Navbar />
      <h2 className="titleAbout">
        {t("titlePart1")} <span>{t("titlePart2")}</span>
      </h2>

      <div className="sub-sensations">
        <img src={sub5} alt="" style={{ width: "100%", height: "auto" }} />
        <div className="info-sub-sensations">
          <h1>
            {t("mainTitle")} <br />
            <span>{t("subTitle")}</span>
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

export default Workation;
