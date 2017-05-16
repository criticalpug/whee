import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from '../../button/button';

import './cart-item.scss';

const buttonText = 'Remove';
const removeButtonStyle = {
  width: '100%',
  marginTop: '0.5rem',
};

class CartItem extends React.Component {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.item);
    }
  }

  render() {
    const { item } = this.props;
    const count = this.props.count === 1
        ? 'piece'
        : 'pieces';

    return (
      <div className="whee-cart-item">
        <div>
          <div className="whee-cart-item__name whee-font-weight-bold whee-font-style-italic">{ item.get('name') }</div>
          <p className="whee-cart-item__description">{ item.get('description') }</p>
        </div>
        <div className="whee-cart-item__summary">
          <span className="whee-cart-item__count">{this.props.count } {count}</span>
          <span>{ item.get('price') * this.props.count } €</span>
        </div>
        <Button onClick={this.onClick} text={buttonText} style={removeButtonStyle} />
      </div>
    );
  }
}

CartItem.propTypes = {
  item: ImmutablePropTypes.map.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
