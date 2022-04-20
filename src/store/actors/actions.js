import axios from "axios";

//get artworks from backend
export const getAllActors = async () => {
  const response = await axios.get("http://localhost:4000/actor");

  return {
    type: "setAllActors",
    payload: response.data,
  };
};
