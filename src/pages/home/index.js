import PropTypes from 'prop-types';
import React from 'react';
import Hero from '../../components/Hero';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Services from '../../components/Services';
import './styles.scss';

function Home(props) {
  const { location } = props;

  return (
    <Layout
      location={location}
      title="Faheem | Full Stack JavaScript Developer"
    >
      <SEO title="Faheem | Full Stack JavaScript Developer" />

      <Hero />
      <Services />
    </Layout>
  );
}

Home.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Home;
