import { fromJS } from 'immutable';
import INITIAL_STATE from './shapes.constants';
import { TYPES } from './shapes.actions';

export default function shapes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.SHAPES_SET_ITEMS: {
      return state.set('shapes', fromJS(action.shapes));
    }
    default: {
      return state;
    }
  }
}
