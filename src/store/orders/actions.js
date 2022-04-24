import axios from "axios";
import { restApi } from "../../apis/calls";

//create an oredrItem
export const addItemToCart = (actor) => {
  return async function (dispatch) {
    // console.log("actor", actor);

    const res = await restApi.post(`/order/addOrderItem`, {
      actorId: actor.id,
    });
    console.log("ressssssss data", res.data);

    dispatch({
      type: "addItemToCart",
      payload: res.data,
    });
  };
};

//see all items in cart
export const fetchOrder = async (dispatch) => {
  const res = await restApi.get(`/order/getDraftOrder`);
  // console.log("res fetch orders", res);
  dispatch({
    type: "setOrderInCart",
    payload: res.data,
  });
};

//delete items from cart
export const deleteOrderItem = (id) => {
  return async function (dispatch) {
    await restApi.delete(`/order/deleteOrderItem/${id}`);
    dispatch({
      type: "deleteOrderFromCart",
      payload: id,
    });
  };
};

//update order status and create eventName
export const submitOrder = (id, eventName) => {
  return async function (dispatch) {
    const res = await restApi.patch(`/order/submit`, { id, eventName });
    // console.log("res oooooordeeeerrrrrrr", res);
    dispatch({
      type: "submitOrder",
    });
  };
};
