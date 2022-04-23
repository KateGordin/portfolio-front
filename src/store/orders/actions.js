import axios from "axios";
import { restApi } from "../../apis/calls";

//create an oredrItem
export const addItemToCart = (actor, token) => {
  return async function (dispatch, getState) {
    // console.log("actor", actor);

    const res = await restApi.post(`/order/addOrderItem`, {
      actorId: actor.id,
    });
    // console.log("ressssssss data", res.data);

    return {
      type: "addItemToCart",
      payload: res.data,
    };
  };
};

//see all items in cart
export const fetchOrder = async () => {
  const res = await restApi.get(`/order/getDraftOrder`);
  // console.log("res fetch orders", res);
  return {
    type: "setOrderInCart",
    payload: res.data,
  };
};

//delete items from cart
export const deleteOrderItem = async (id) => {
  const res = await restApi.delete(`/order/deleteOrderItem/${id}`);
  return {
    type: "deleteOrderFromCart",
    payload: id,
  };
};

//update order status and create eventName
export const submitOrder = async (id, eventName) => {
  const res = await restApi.patch(`/order/submit`, { id, eventName });
  console.log("res oooooordeeeerrrrrrr", res);
  return {
    type: "submitOrder",
  };
};
