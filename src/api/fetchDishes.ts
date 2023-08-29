import axios from "axios";
import { URLS } from "../constants/urls";
import { Dishes } from "../interfaces";

export const fetchDishes = async () => {
  const { data } = await axios.get<{ dishes: Dishes[] }>(URLS.dishes);

  return data.dishes;
};
