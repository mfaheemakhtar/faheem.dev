import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function CardContent(props) {
  const { children, className } = props;
  return <div className={`card-content ${className}`}>{children}</div>;
}

CardContent.defaultProps = {
  className: '',
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardContent;
