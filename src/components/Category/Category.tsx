import { FC } from "react";
import { ICategory } from "../../interfaces";

interface CategoryProps {
  item: ICategory;
}

export const Category: FC<CategoryProps> = ({ item }) => {
  return (
    <div className="relative rounded-2xl max-w-[500px] ">
      <h3 className=" absolute top-[10%] left-[10%] text-3xl font-medium  z-10">
        {item.name}
      </h3>
      <img className="object-cover" src={item.image_url} alt="" />
    </div>
  );
};
