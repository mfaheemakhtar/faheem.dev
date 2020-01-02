import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Button(props) {
  const {
    autocomplete,
    children,
    className,
    disabled,
    href,
    onClick,
    rel,
    target,
    type,
  } = props;

  if (type === 'link') {
    return (
      <a
        className={`button button-link ${className}`}
        href={href}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      autoComplete={autocomplete}
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  autocomplete: 'off',
  className: '',
  disabled: false,
  href: '#',
  onClick: () => {},
  rel: 'noreferrer noopener',
  target: '_blank',
  type: 'button',
};

Button.propTypes = {
  autocomplete: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
