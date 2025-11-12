import React from 'react';
import './About.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/NavBar';
import Languages from '../../components/Languages/Languages';
import brice from '../../assets/images/teamBS/Brice.png';
import chloe from '../../assets/images/teamBS/Chloe.png';
import laura from '../../assets/images/teamBS/Laura.png';
import max from '../../assets/images/teamBS/Max.png';
import graci from '../../assets/images/teamBS/Graciele.png';
import daniel from '../../assets/images/teamBS/Daniel.png';
import lukasz from '../../assets/images/teamBS/lukasz.png';
import aliceImg from '../../assets/images/teamBS/Alice.png';
import regiane from '../../assets/images/teamBS/Regiane.png';
import daniele from '../../assets/images/teamBS/Daniele.png';
import roberto from '../../assets/images/teamBS/Roberto.png';
import vitoria from '../../assets/images/teamBS/vitoria.png';
import marcele from '../../assets/images/teamBS/Marcele.png';
import elaine from '../../assets/images/teamBS/Elaine.png';
import elias from '../../assets/images/teamBS/Elias.png';
import anita from '../../assets/images/teamBS/Anita.png';
import emannuely from '../../assets/images/teamBS/Emannuely.png';
import imggreen from '../../assets/images/imgsAbout/imggreen.png';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  const teamMembers = [
    { img: brice, name: 'Brice Serviere', role: 'Manager' },
    { img: chloe, name: 'Chloé Hathaway', role: 'Manager' },
    { img: laura, name: 'Laura Policastro', role: 'Director LATAM' },
    {
      img: max,
      name: 'Max Balbino',
      role: 'Sales Director – North American Market',
    },
    { img: graci, name: 'Graciele Souza', role: 'FIT & Groups Manager' },
    { img: daniel, name: 'Daniel Cardozo', role: 'Account Manager' },
    { img: lukasz, name: 'Lukasz Okon', role: 'Account Manager' },
    { img: aliceImg, name: 'Alice Santos', role: 'Trainee IT & AI' },
    { img: regiane, name: 'Regiane Lima', role: 'Account Manager' },
    { img: daniele, name: 'Daniele Hug', role: 'Account Manager' },
    { img: vitoria, name: 'Maria Victória', role: 'Trainee MKT' },
    { img: roberto, name: 'Roberto Ricardo', role: 'Account Manager' },
    { img: marcele, name: 'Marcele Baptista', role: 'Account Manager' },
    { img: elaine, name: 'Elaine Hailer', role: 'Account Manager' },
    { img: elias, name: 'Elias Paiva', role: 'Account Manager' },
    { img: anita, name: 'Anita Vitória', role: 'Trainee' },
    { img: emannuely, name: 'Emannuely Duarte', role: 'Account Manager' },
  ];

  return (
    <>
      <Languages />
      <Navbar />

      <section className="mainAbout">
        <h2 className="titleAbout">
          <span>{t('titleSpan')}</span> {t('title')}
        </h2>

        <div className="textAbout">
          <div className="paragraph">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>

          <ul>
            <li>{t('list.item1')}</li>
            <li>{t('list.item2')}</li>
            <li>{t('list.item3')}</li>
          </ul>
        </div>

        <div className="team">
          {teamMembers.map((member, index) => (
            <div className="cardProfile" key={index}>
              <img src={member.img} alt={member.name} />
              <h5>{member.name}</h5>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        <section className="secGoals">
          <div className="goals">
            <h3>{t('mission.title')}</h3>
            <p>{t('mission.text')}</p>
          </div>
          <div className="goals">
            <h3>{t('vision.title')}</h3>
            <p>{t('vision.text')}</p>
          </div>
          <div className="goals">
            <h3>{t('values.title')}</h3>
            <p>{t('values.text')}</p>
          </div>
        </section>

        <section className="secGreen">
          <div className="textGreen">
            <h3>{t('green.title1')}</h3>
            <h3>{t('green.title2')}</h3>
            <p>{t('green.text')}</p>
          </div>
          <img src={imggreen} alt={t('green.imgAlt')} />
        </section>

        <section className="impactAbout">
          <div className="columnImpact">
            <h3>
              {t('impact.environment.title')}{' '}
              <span>{t('impact.environment.span')}</span>
            </h3>
          </div>
          <div className="columnImpact">
            <ul>
              {t('impact.environment.list', { returnObjects: true }).map(
                (item, idx) => (
                  <li key={idx}>{item}</li>
                ),
              )}
            </ul>
          </div>

          <div className="columnImpact">
            <h3>
              {t('impact.social.title')} <span>{t('impact.social.span')}</span>
            </h3>
          </div>
          <div className="columnImpact">
            <ul>
              {t('impact.social.list', { returnObjects: true }).map(
                (item, idx) => (
                  <li key={idx}>{item}</li>
                ),
              )}
            </ul>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default About;
