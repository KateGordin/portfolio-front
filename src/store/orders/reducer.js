const initialState = {
  orders: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addItemToCart":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    default:
      return state;
  }
}
