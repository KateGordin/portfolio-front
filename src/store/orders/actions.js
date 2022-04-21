import axios from "axios";

//create an oredrItem
export const addItemToCart = (actor) => {
  return async function (dispatch, getState) {
    console.log("actor", actor);

    //1. Request to create order

    //Post order-items

    const res = await axios.post(`http://localhost:4000/order/addOrderItem`, {
      actorId: actor.id,
    });
    console.log("ressssssss", res);

    return {
      type: "addItemToCart",
      payload: res.data,
    };
  };
};
