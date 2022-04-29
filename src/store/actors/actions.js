import axios from "axios";

//get artworks from backend
export const getAllActors = async () => {
  const response = await axios.get("https://lucky-party.herokuapp.com/actor");

  return {
    type: "setAllActors",
    payload: response.data,
  };
};
