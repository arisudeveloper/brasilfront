import React from 'react'
import Languages from '../../../components/Languages/Languages'
import Navbar from '../../../components/NavBar/NavBar'
import { useTranslation } from "react-i18next";
import './Prod.css'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

import north from "../../../assets/images/privatePages/north.png"
import northeast from "../../../assets/images/privatePages/northeast.png"
import central from "../../../assets/images/privatePages/central.png"
import southeast from "../../../assets/images/privatePages/southeast.png"
import south from "../../../assets/images/privatePages/south.png"
import folhagem from "../../../assets/images/privatePages/folhagem.jpg"

import { Link } from 'react-router-dom';

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

const HomeProd = () => {
    const { t } = useTranslation("productions")
    return (
        <div>
            <Languages />
            <Navbar />
            <h2 className="titleHTL-PROD">
                {t('titleProd')}
            </h2>
            <section className='containerProd'>
                <Card className="cardProd">
                    <CardMedia component="img" alt="" height="240" image={folhagem} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("titleFit")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/fit-production" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("subtitle")}</Link>
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
                        </CustomText>
                    </CardActions>
                </Card>

                <Card className="cardProd">
                    <CardMedia component="img" alt="" height="240" image={folhagem} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("titleGroup")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/group-production" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("subtitle")}</Link>
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
                        </CustomText>
                    </CardActions>
                </Card>

            </section>
        </div>
    )
}

export default HomeProd
