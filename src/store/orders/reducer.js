const initialState = {
  orders: [],
  cart: {
    orderItems: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addItemToCart":
      return {
        ...state,
        cart: {
          ...state.cart,
          orderItems: [...state.cart.orderItems, action.payload],
        },
      };

    case "setOrderInCart":
      return {
        ...state,
        cart: action.payload,
      };

    case "deleteOrderFromCart":
      return {
        ...state,
        cart: {
          ...state.cart,
          orderItems: state.cart.orderItems.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    case "submitOrder":
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
