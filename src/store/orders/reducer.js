import {
  CLEAR_CART,
  DELETE_ORDER_FROM_CART,
  SET_ORDER_IN_CART,
  ADD_ITEM_TO_CART,
} from "./actions";

const initialState = {
  orders: [],
  cart: {
    orderItems: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          id: action.payload.orderId,
          orderItems: [...state.cart.orderItems, action.payload],
        },
      };

    case SET_ORDER_IN_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case DELETE_ORDER_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          orderItems: state.cart.orderItems.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: {
          orderItems: [],
        },
      };

    default:
      return state;
  }
}
