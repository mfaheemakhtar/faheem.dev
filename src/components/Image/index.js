import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Image(props) {
  const { alt, className, source, title } = props;

  return (
    <picture className={`image ${className}`}>
      <source srcSet={source} />
      <img alt={alt} src={source} title={title} />
    </picture>
  );
}

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
