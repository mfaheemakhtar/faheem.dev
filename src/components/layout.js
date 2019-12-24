import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

function Layout(props) {
  const { location, title, children } = props;

  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;

  if (location.pathname === rootPath) {
    return (
      <div>
        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
        </footer>
      </div>
    );
  }

  const header = (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          color: 'inherit',
          textDecoration: 'none',
        }}
        to="/"
      >
        {title}
      </Link>
    </h3>
  );

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        ©{new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org"> Gatsby</a>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  location: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
