import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Card(props) {
  const { children, className } = props;

  return <div className={`card ${className}`}>{children}</div>;
}

Card.defaultProps = {
  className: '',
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
