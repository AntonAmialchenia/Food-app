import axios from "axios";
import { URLS } from "../constants/urls";
import { ICategory } from "../interfaces";

export const fetchCategories = async () => {
  const { data } = await axios.get<{ сategories: ICategory[] }>(
    URLS.categories,
  );

  return data.сategories;
};
