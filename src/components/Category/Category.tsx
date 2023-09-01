import { FC } from "react";
import { ICategory } from "../../interfaces";

interface CategoryProps {
  item: ICategory;
}

export const Category: FC<CategoryProps> = ({ item }) => {
  return (
    <div className="relative rounded-2xl  ">
      <h3 className=" absolute top-[10%] left-[5%] text-3xl font-semibold  z-10">
        {item.name}
      </h3>
      <img className="" src={item.image_url} alt="" />
    </div>
  );
};
