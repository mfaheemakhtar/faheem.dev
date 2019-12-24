import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Button(props) {
  const { children, className, autocomplete, disabled, type } = props;

  return (
    <button
      autoComplete={autocomplete}
      className={`Button ${className}`}
      disabled={disabled}
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
  type: 'button',
};

Button.propTypes = {
  autocomplete: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
