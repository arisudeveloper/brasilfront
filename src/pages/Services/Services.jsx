import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Services.css";
import services01 from "../../assets/images/services/services01.png";
import logo from "../../assets/images/services/logo.png";
import { useTranslation } from "react-i18next";
import Languages from "../../components/Languages/Languages";

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <>
      <Languages/>
      <Navbar />
      <h2 className="titleServices">{t("title")}</h2>
      
      <section className="secServices">
        <ul id="ul1">
          <li>{t("list1.0")}</li>
          <li>{t("list1.1")}</li>
          <li>{t("list1.2")}</li>
          <li>{t("list1.3")}</li>
          <li>{t("list1.4")}</li>
        </ul>

        <ul id="ul2">
          <li>{t("list2.0")}</li>
          <li>{t("list2.1")}</li>
          <li>{t("list2.2")}</li>
          <li>{t("list2.3")}</li>
          <li>{t("list2.4")}</li>
        </ul>

        <img src={logo} alt={t("logoAlt")} className="logoService" />
      </section>

      <img src={services01} alt={t("mainImgAlt")} className="imgService" />
      <Footer />
    </>
  );
};

export default Services;
