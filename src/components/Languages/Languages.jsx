import React from "react";
import eng from "../../assets/images/languages/en.png";
import esp from "../../assets/images/languages/esp.png";
import fr from "../../assets/images/languages/fr.png";
import pt from "../../assets/images/languages/br.png";
import po from "../../assets/images/languages/po.png";
import de from "../../assets/images/languages/de.png";
import fl from "../../assets/images/languages/fl.png";
import "./Languages.css";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languages">
      <ul>
        <li>
          <button onClick={() => changeLanguage("en")}>
            <img src={eng} alt="English" title="english" />
          </button>
        </li>

        <li>
          <button onClick={() => changeLanguage("esp")}>
            <img src={esp} alt="Español" title="espanish" />
          </button>
        </li>

        <li>
          <button onClick={() => changeLanguage("fr")}>
            <img src={fr} alt="Français" title="french" />
          </button>
        </li>
        
        <li>
          <button onClick={() => changeLanguage("pt")}>
            <img src={pt} alt="Português" title="portuguese" />
          </button>
        </li>
        <li>
          <button onClick={() => changeLanguage("po")}>
            <img src={po} alt="Polonês" title="polish" />
          </button>
        </li>
        <li>
          <button onClick={() => changeLanguage("de")}>
            <img src={de} alt="Alemão" title="germany" />
          </button>
        </li>
        <li>
          <button onClick={() => changeLanguage("fl")}>
            <img src={fl} alt="Belgica" title="flemish"/>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Languages;