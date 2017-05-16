import React from 'react';
import PropTypes from 'prop-types';

import './shape.scss';

const Shape = ({ shape }) => <div className={`whee-shape-${shape.toLowerCase()}`} />;

Shape.propTypes = {
  shape: PropTypes.string.isRequired,
};

export default Shape;
