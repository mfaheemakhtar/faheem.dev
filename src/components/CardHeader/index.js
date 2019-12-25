import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function CardHeader(props) {
  const { children, className } = props;
  return <h3 className={`card-header ${className}`}>{children}</h3>;
}

CardHeader.defaultProps = {
  className: '',
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardHeader;
