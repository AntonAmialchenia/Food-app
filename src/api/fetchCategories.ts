import axios from "axios";
import { URLS } from "../constants/urls";
import { Category } from "../interfaces";

export const fetchCategories = async () => {
  const { data } = await axios.get<{ сategories: Category[] }>(URLS.categories);

  return data.сategories;
};
