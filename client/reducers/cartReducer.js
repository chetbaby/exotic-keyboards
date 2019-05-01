import * as types from '../constants/actionTypes';

const initialState = {
  wood: { type: 'ash', price: 20 },
  stain: { type: 'purple', price: 30 },
  base: 50,
  total: 100,
  didLogIn: false,
};

function calcTotal(base, woodPrice, stainPrice) {
  return (base + woodPrice + stainPrice).toFixed(2);
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_WOOD:
      return {
        ...state,
        wood: { type: action.payload.type, price: action.payload.price },
        total: calcTotal(state.base, action.payload.price, state.stain.price)
      };
    case types.SELECT_STAIN:
      return {
        ...state,
        stain: { type: action.payload.type, price: action.payload.price },
        total: calcTotal(state.base, state.wood.price, action.payload.price)
      };
    case types.LOGIN:
      return {
        ...state,
        didLogIn: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        didLogIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;