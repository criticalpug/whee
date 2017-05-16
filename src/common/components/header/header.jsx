import React from 'react';

import LABELS from './constants';
import Cart from '../cart/cart';

import './header.scss';

const texts = {
  empty: 'No items in cart',
  single: 'One item in cart',
  multiple: '{N} items in the cart',
};

const Header = () => (
  <header className="whee-header">
    <div className="whee-header-content">
      <span className="whee-header-content__title whee-font-weight-bold">
        { LABELS.title }
      </span>
      <span className="whee-header-content__description">
        { LABELS.description }
      </span>
      <span className="whee-header-content__filler" />
      <Cart texts={texts} />
    </div>
  </header>
);

export default Header;
