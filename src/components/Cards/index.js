import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Cards(props) {
  const { children, className } = props;
  return <div className={`Cards ${className}`}>{children}</div>;
}

Cards.defaultProps = {
  className: '',
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Cards;
