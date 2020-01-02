import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Image(props) {
  const { alt, caption, className, source, title } = props;

  return (
    <figure className={`image ${className}`}>
      <picture>
        <source srcSet={source} />
        <img alt={alt} src={source} title={title} />
      </picture>

      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}

Image.defaultProps = {
  caption: '',
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
