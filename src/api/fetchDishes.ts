import axios from "axios";
import { URLS } from "../constants/urls";
import { IDish } from "../interfaces";

export const fetchDishes = async () => {
  const { data } = await axios.get<{ dishes: IDish[] }>(URLS.dishes);

  return data.dishes;
};
