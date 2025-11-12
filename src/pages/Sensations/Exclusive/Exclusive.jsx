import sub4 from "../../../assets/images/sensations/sub4.png";
import exclusive01 from "../../../assets/images/sensations/exclusive01.png";
import exclusive02 from "../../../assets/images/sensations/exclusive02.png";
import exclusive03 from "../../../assets/images/sensations/exclusive03.png";
import exclusive04 from "../../../assets/images/sensations/exclusive04.png";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../Sensations.css";
import { useTranslation } from "react-i18next";
import Languages from "../../../components/Languages/Languages";

// Lista das imagens locais
const novasImagens = [
  { img: exclusive01, key: "gallery.img1" },
  { img: exclusive02, key: "gallery.img2" },
  { img: exclusive03, key: "gallery.img3" },
  { img: exclusive04, key: "gallery.img4" }
];

const Exclusive = () => {
  const { t } = useTranslation("exclusive");

  return (
    <>
      <Languages />
      <Navbar />

      <h2 className="titleAbout">
        {t("titlePart1")} <span>{t("titlePart2")}</span>
      </h2>

      <div className="sub-sensations">
        <img
          src={sub4}
          alt={t("subImageAlt")}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="info-sub-sensations">
          <h1>
            {t("headingPart1")} <span>{t("headingPart2")}</span>
          </h1>
          <p>{t("description")}</p>

          <div className="galeria">
            {novasImagens.map((item, index) => (
              <img key={index} src={item.img} alt={t(item.key)} />
            ))}
          </div>
        </div>

        <Link to="/sensations">
          <button className="btnSensations">{t("button")}</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Exclusive;
