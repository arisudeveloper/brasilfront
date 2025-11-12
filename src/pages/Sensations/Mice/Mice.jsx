import sub3 from "../../../assets/images/sensations/sub3.png";
import mice01 from "../../../assets/images/sensations/mice01.png";
import fitgrp1 from "../../../assets/images/sensations/fit-grp01.jpg";
import mice02 from "../../../assets/images/sensations/mice02.png";
import mice03 from "../../../assets/images/sensations/mice03.png";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../Sensations.css";
import { useTranslation } from "react-i18next";
import Languages from "../../../components/Languages/Languages";

// Lista das imagens locais
const novasImagens = [
  { img: mice01, key: "gallery.img1" },
  { img: fitgrp1, key: "gallery.img2" },
  { img: mice02, key: "gallery.img3" },
  { img: mice03, key: "gallery.img4" }
];

const Mice = () => {
  const { t } = useTranslation("mice");

  return (
    <>
      <Languages />
      <Navbar />

      <h2 className="titleAbout">
        {t("titlePart1")} <span>{t("titlePart2")}</span>
      </h2>

      <div className="sub-sensations">
        <img
          src={sub3}
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

export default Mice;
