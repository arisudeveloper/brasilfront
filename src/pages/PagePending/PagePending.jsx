import React from 'react';
import './PagePending.css';
import { Link } from 'react-router-dom';
import Languages from '../../components/Languages/Languages';
import { useTranslation } from 'react-i18next';

const PagePending = () => {
  const { t } = useTranslation('pending');
  const firstname = localStorage.getItem('firstname');

  return (
    <>
      <Languages />
      <div className="pendingContainer">
        <section className="messagePending">
          <h1>Hi, {firstname}</h1>
          <h1>{t('titlePending')}</h1>
          <p>{t('textPending')}</p>

          <Link to="/">
            <button className="buttonPending">{t('buttonPending')}</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default PagePending;
