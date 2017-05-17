import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { toggleOpen } from './cart.actions';

import './cart.scss';

const cartIcon = (
  <svg x="0px" y="0px" viewBox="0 0 20 20" width="20" height="20">
    <path
      className="whee-icon-cart"
      d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4L0,3h2l1.91,8.957L4,12.9v1.649c0,0.219,0.18,0.4,0.4,0.4H17.6c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"
    />
  </svg>
);

class Cart extends React.PureComponent {
  getText = (count, texts) => {
    let text = '';

    switch (count) {
      case 0:
        text = texts.empty;
        break;
      case 1:
        text = texts.single;
        break;
      default:
        text = texts.multiple.replace('{N}', count);
        break;
    }

    return text;
  }

  render() {
    const { texts, items, open, ...props } = this.props;

    return (
      <div className="whee-cart" {...props}>
        <span className="whee-cart__title">
          { this.getText(this.props.items.size, texts) }
        </span>
        <button type="button" onClick={open} className="whee-cart__button">
          <span>{ cartIcon }</span>
        </button>
      </div>
    );
  }
}

Cart.propTypes = {
  texts: PropTypes.shape({
    empty: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
    multiple: PropTypes.string.isRequired,
  }).isRequired,
  items: ImmutablePropTypes.list.isRequired,
  open: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.get('items'),
});

const mapDispatchToProps = dispatch => ({
  open: () => {
    dispatch(toggleOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
