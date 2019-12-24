import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import './styles.scss';
import Button from '../../components/Button';

function Home(props) {
  const { location } = props;

  return (
    <Layout
      location={location}
      title="Faheem | Full Stack JavaScript Developer"
    >
      <SEO title="Faheem | Full Stack JavaScript Developer" />

      <section className="Home">
        <div>
          <h1 className="title">Hello, I am Faheem</h1>
          <p>and I am a Full Stack JavaScript developer</p>

          <Button>Contact Me</Button>
          <Button>Hire Me</Button>
        </div>
      </section>
    </Layout>
  );
}

Home.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Home;
