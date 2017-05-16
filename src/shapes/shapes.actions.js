import axios from 'axios';

export const TYPES = {
  SHAPES_SET_ITEMS: 'SHAPES_SET_ITEMS',
};

export function setShapes(shapes) {
  return { type: TYPES.SHAPES_SET_ITEMS, shapes };
}

export function loadShapes() {
  return function loadShapesThunk(dispatch) {
    return axios.get('/shapes').then((response) => {
      dispatch(setShapes(response.data));
    }).catch((error) => {
      throw (error);
    });
  };
}
