import React from 'react';
import './Initial.css';
import Languages from '../../../components/Languages/Languages';
import Navbar from '../../../components/NavBar/NavBar';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import htlInitial from '../../../assets/images/privatePages/htl-initial.png';
import logo from '../../../assets/images/privatePages/logo.png';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import DeleteAccount from '../../../components/DeleteAccount/DeleteAccount';
import { UserContext } from '../../../context/UserContext';

const Titles = styled(Typography)`
  background: linear-gradient(to right, #084b71, white);
  padding: 7px;
  font-family: 'Roboto', sans-serif !important;
  font-weight: 300 !important;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.87);
`;

const CustomText = styled(Typography)`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 300 !important;
`;

const Initial = () => {
  const { data } = React.useContext(UserContext);
  const { t } = useTranslation('productions');

  return (
    <div>
      <Languages />
      <Navbar />
      <DeleteAccount />
      <section className="containerInitial">
        {/* HOTEIS */}
        <Card className="cardInitial">
          <CardMedia
            component="img"
            alt="french"
            height="240"
            image={htlInitial}
          />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t('titleHotel')}
            </Titles>
            <CustomText variant="body2" sx={{ color: 'text.secondary' }}>
              <Link
                to="/home-hotels"
                style={{
                  color: 'black',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                }}
              >
                {t('subtitle')}
              </Link>
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: '#1976d2',
                margin: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            ></CustomText>
          </CardActions>
        </Card>

        {/* PRODUTOS */}
        <Card className="cardInitial">
          <CardMedia component="img" alt="french" height="240" image={logo} />
          <CardContent>
            <Titles gutterBottom variant="h5">
              {t('titleProd')}
            </Titles>
            <CustomText variant="body2" sx={{ color: 'text.secondary' }}>
              <Link
                to="/home-production"
                style={{
                  color: 'black',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                }}
              >
                {t('subtitle')}
              </Link>
            </CustomText>
          </CardContent>
          <CardActions>
            <CustomText
              variant="body2"
              sx={{
                color: '#1976d2',
                margin: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            ></CustomText>
          </CardActions>
        </Card>
      </section>
    </div>
  );
};

export default Initial;
