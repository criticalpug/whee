import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { toggleOpen, removeItem } from './cart.actions';
import CartItem from './cart-item/cart-item';
import Button from '../button/button';

import './cart.scss';

const buttonText = 'Close';
const buttonStyle = {
  width: '100%',
};

class CartContents extends React.Component {
  removeFromCart = (item) => {
    this.props.removeItem(item);
  }

  render() {
    let total = 0;
    const items = this.props.items
        .groupBy(item => item.get('id'))
        .map((groupItem) => {
          const item = groupItem.get(0);
          const count = groupItem.size;
          total += (item.get('price') * count);
          return <CartItem item={item} key={item.get('id')} onClick={this.removeFromCart} count={count} />;
        });

    const count = this.props.items.size === 1
        ? 'piece'
        : 'pieces';

    return (
      <div className="whee-cart-contents">
        <div className="whee-cart-contents__item">
          <Button onClick={this.props.toggleOpen} text={buttonText} style={buttonStyle} />
        </div>
        {
          this.props.items.size === 0
          ? <div className="whee-cart-contents__empty">
            You have no items in the cart
          </div>
          : <div className="whee-cart-contents__summary">
            <span>{ this.props.items.size } {count}</span>
            <span>Total {total} €</span>
          </div>
        }
        {
          items
        }
      </div>
    );
  }
}

CartContents.propTypes = {
  items: ImmutablePropTypes.list.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.get('items'),
});

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => {
    dispatch(toggleOpen());
  },
  removeItem: (item) => {
    dispatch(removeItem(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContents);
