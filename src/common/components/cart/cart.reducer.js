import INITIAL_STATE from './cart.constants';
import { TYPES } from './cart.actions';

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.CART_ITEM_ADD: {
      return state.set('items', state.get('items').push(action.item));
    }
    case TYPES.CART_ITEM_REMOVE: {
      const items = state.get('items');
      const id = action.item.get('id');
      return state.set('items', items.delete(items.findIndex(item => item.get('id') === id)));
    }
    case TYPES.CART_SET_OPEN: {
      return state.set('isOpen', action.isOpen);
    }
    case TYPES.CART_TOGGLE_OPEN: {
      return state.set('isOpen', !state.get('isOpen'));
    }
    default: {
      return state;
    }
  }
}
