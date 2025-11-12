import React from 'react'
import Languages from '../../../components/Languages/Languages'
import Navbar from '../../../components/NavBar/NavBar'
import { useTranslation } from "react-i18next";
import './Htl.css'

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

const HomeHtl = () => {
    const { t } = useTranslation("productions")
    return (
        <div>
            <Languages />
            <Navbar />
            <h2 className="titleHTL-PROD">
                {t('titleHotel')}
            </h2>
            <section className='containerProd'>
                <Card className="cardProd">
                    <CardMedia component="img" alt="french" height="240" image={northeast} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("northeastTitle")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/northeast-hotels" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("subtitle")}</Link>
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
                    <CardMedia component="img" alt="south" height="240" image={southeast} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("southeastTitle")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/southeast-hotels" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("subtitle")}</Link>
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
                    <CardMedia component="img" alt="south" height="240" image={south} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("southTitle")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/south-hotels" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("subtitle")}</Link>
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
                {/* 
                <Card className="cardProd">
                    <CardMedia component="img" alt="" height="240" image={north} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("titleN")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/north-" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("linkN")}</Link>
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
                    <CardMedia component="img" alt="french" height="240" image={central} />
                    <CardContent>
                        <Titles gutterBottom variant="h5">
                            {t("titleCO")}
                        </Titles>
                        <CustomText variant="body2" sx={{ color: "text.secondary" }}>
                            <Link to="/central-production" style={{ color: "black", fontSize: "1.1rem", textAlign: "center" }}>{t("linkCO")}</Link>
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

*/}
            </section>
        </div>
    )
}

export default HomeHtl
