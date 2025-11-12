import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Languages from '../../components/Languages/Languages';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Languages />
      <Navbar />
      <div className="politica-container">
        <h1>Consents Form and Privacy Policy</h1>

        <div className="politica-texto">
          <p>
            <strong>Last updated:</strong> November 6, 2025
          </p>

          <h2>1. Introduction</h2>
          <p>
            This website, <strong>Brazil Sensations</strong>, respects your
            privacy and complies with Law No. 13.709/2018 (General Data
            Protection Law – LGPD).
          </p>

          <h2>2. Data collection and use</h2>
          <p>
            While using this website, we collect your{' '}
            <strong>email address</strong> and use an{' '}
            <strong>authentication token</strong> to keep you securely logged
            in.
          </p>

          <h2>3. Storage and protection</h2>
          <p>
            Your data is stored in a secure environment, protected against
            unauthorized access, and used only while your account remains
            active.
          </p>

          <h2>4. Data sharing</h2>
          <p>
            We do not share your information with third parties, except when
            required by law.
          </p>

          <h2>5. Data subject rights</h2>
          <p>
            You may request access, correction, or deletion of your data, as
            well as revoke your consent at any time. Contact:{' '}
            <strong>contact@brazilsensations.com</strong>
          </p>

          <h2>6. Consent</h2>
          <p>
            By accepting this policy, you consent to the processing of your
            personal data as described in this Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
