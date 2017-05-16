export const TYPES = {
  CART_ITEM_REMOVE: 'CART_ITEM_REMOVE',
  CART_ITEM_ADD: 'CART_ITEM_ADD',
  CART_SET_OPEN: 'CART_SET_OPEN',
  CART_TOGGLE_OPEN: 'CART_TOGGLE_OPEN',
};

export function addItem(item) {
  return { type: TYPES.CART_ITEM_ADD, item };
}

export function removeItem(item) {
  return { type: TYPES.CART_ITEM_REMOVE, item };
}

export function setOpen(isOpen) {
  return { type: TYPES.CART_SET_OPEN, isOpen };
}

export function toggleOpen() {
  return { type: TYPES.CART_TOGGLE_OPEN };
}
