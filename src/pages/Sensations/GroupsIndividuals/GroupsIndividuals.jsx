import sub1 from "../../../assets/images/sensations/sub1.png";
import fitgrp1 from "../../../assets/images/sensations/fit-grp01.jpg";
import fitgrp2 from "../../../assets/images/sensations/fit-grp02.png";
import fitgrp3 from "../../../assets/images/sensations/fit-grp03.png";
import fitgrp4 from "../../../assets/images/sensations/fit-grp04.png";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../Sensations.css";
import { useTranslation } from "react-i18next";
import Languages from "../../../components/Languages/Languages";


const GroupsIndividuals = () => {
  const { t } = useTranslation("groupsIndividuals");

  return (
    <>
      <Languages />
      <Navbar />

      <h2 className="titleAbout">
        {t("titlePart1")} <span>{t("titlePart2")}</span>
      </h2>

      <div className="sub-sensations">
        <img
          src={sub1}
          alt={t("subImageAlt")}
          style={{ width: "100%", height: "auto" }}
        />

        <div className="info-sub-sensations">
          <h1>
            {t("headingPart1")} <span>{t("headingPart2")}</span>
          </h1>
          <p>{t("description")}</p>

          <div className="galeria">
            <img src={fitgrp1} alt={t("gallery.img1")} />
            <img src={fitgrp2} alt={t("gallery.img2")} />
            <img src={fitgrp3} alt={t("gallery.img3")} />
            <img src={fitgrp4} alt={t("gallery.img4")} />
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

export default GroupsIndividuals;