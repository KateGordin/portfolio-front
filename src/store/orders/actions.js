import axios from "axios";
import { restApi } from "../../apis/calls";

export const CLEAR_CART = "clearCart";
export const DELETE_ORDER_FROM_CART = "deleteOrderFromCart";
export const SET_ORDER_IN_CART = "setOrderInCart";
export const ADD_ITEM_TO_CART = "addItemToCart";

//create an oredrItem
export const addItemToCart = (actor) => {
  return async function (dispatch) {
    // console.log("actor", actor);

    const res = await restApi.post(`/order/addOrderItem`, {
      actorId: actor.id,
    });
    // console.log("ressssssss data from action", res.data);

    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: res.data,
    });
  };
};

//see all items in cart
export const fetchOrder = async (dispatch) => {
  const res = await restApi.get(`/order/getDraftOrder`);
  // console.log("res fetch orders", res);
  dispatch({
    type: SET_ORDER_IN_CART,
    payload: res.data,
  });
};

//delete items from cart
export const deleteOrderItem = (id) => {
  return async function (dispatch) {
    await restApi.delete(`/order/deleteOrderItem/${id}`);
    dispatch({
      type: DELETE_ORDER_FROM_CART,
      payload: id,
    });
  };
};

//update order status and create eventName
export const submitOrder = (orderId, eventName, textInEmail) => {
  return async function (dispatch) {
    await restApi.patch(`/order/submit`, {
      id: orderId,
      eventName,
      textInEmail,
    });
    dispatch({
      type: CLEAR_CART,
    });
  };
};
