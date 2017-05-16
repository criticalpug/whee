import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ onClick, text, classNames, ...props }) => (
  <button type="button" className={`whee-button ${classNames}`} onClick={onClick} {...props}>
    { text }
  </button>
);

Button.defaultProps = {
  classNames: '',
};

Button.propTypes = {
  classNames: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
