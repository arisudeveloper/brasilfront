import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { LocationOn } from "@mui/icons-material";

import cachaca from "../../assets/images/experiences/cachaca.jpg";
import capoeira from "../../assets/images/experiences/capoeira.jpg";
import havaianas from "../../assets/images/experiences/havaianas.jpg";
import iemanja from "../../assets/images/experiences/iemanja.jpg";
import grafite from "../../assets/images/experiences/grafite.jpg";
import cristo from "../../assets/images/experiences/cristo.png";
import fantasias from "../../assets/images/experiences/fantasias.jpg";
import regata from "../../assets/images/experiences/regata.png";
import caipirinha from "../../assets/images/experiences/caipi.jpg";
import "./Experiences.css";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


import { useTranslation } from "react-i18next";
import Languages from "../../components/Languages/Languages";

const Titles = styled(Typography)`
  background: linear-gradient(to right, #084b71, white);
  padding: 7px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 300 !important;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.87);
`;

const CustomText = styled(Typography)`
  font-family: "Roboto", sans-serif !important;
  font-weight: 300 !important;
`;

const Experiences = () => {
  const { t } = useTranslation("experiences");

  return (
    <div>
      <Languages/>
      <Navbar />
      <h2 className="titleExpo">{t("title")}</h2>

      <div className="expo">
        {/* Cachaça */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="cachaça" height="240" image={cachaca} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.cachaca.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.cachaca.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.cachaca.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Capoeira */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="capoeira" height="240" image={capoeira} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.capoeira.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.capoeira.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.capoeira.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Regata */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="regata" height="240" image={regata} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.regata.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.regata.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.regata.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Iemanjá */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="iemanja" height="240" image={iemanja} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.iemanja.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.iemanja.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.iemanja.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Grafite */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="grafite" height="240" image={grafite} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.grafite.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.grafite.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.grafite.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Cristo */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="cristo" height="240" image={cristo} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.cristo.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.cristo.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.cristo.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Fantasias */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="fantasias" height="240" image={fantasias} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.fantasias.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.fantasias.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.fantasias.location")}
            </CustomText>
          </CardActions>
        </Card>

        {/* Havaianas */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="havaianas" height="240" image={havaianas} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t("cards.havaianas.title")}
            </Titles>
            <CustomText variant="body2" sx={{ color: "text.secondary" }}>
              {t("cards.havaianas.text")}
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: "#1976d2",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <LocationOn sx={{ fontSize: 25 }} /> {t("cards.havaianas.location")}
            </CustomText>
          </CardActions>
        </Card>
      </div>
{/**
 *  
      <div id="mainCaipirinha">
        <section id="texto">
          <h2>{t("caipirinha.title")}</h2>
          <p>{t("caipirinha.text")}</p>
        </section>

        <section id="img">
          <img src={caipirinha} alt="Caipirinha Workshop" />
        </section>
      </div>
 */}


      {/* Vídeo */}
      <div id="mainVideo">
        <h2>{t("video.title")}</h2>
        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
          <div className="videoWrapper">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/K9G1yTAb31w?autoplay=1&rel=0&modestbranding=1"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experiences;
