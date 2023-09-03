import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";
import { HeartIcon } from "../../icons/HeartIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import { IDish } from "../../interfaces";

interface ModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  item: IDish | undefined;
}

export const Modal: FC<ModalProps> = ({ isVisible, item, setVisible }) => {
  return (
    <div
      className={clsx(
        "fixed top-0 bottom-0 right-0 left-0  bg-[rgba(0,0,0,0.4)]",
        isVisible ? "flex items-center justify-center" : "hidden",
      )}>
      <div className="p-3 bg-white rounded-2xl max-w-sm ">
        <div className="relative bg-[#F8F7F5] rounded-2xl p-3 flex justify-center mb-2">
          <img
            className="max-w-[190px] max-h-[190px]"
            src={item?.image_url}
            alt={item?.description}
          />
          <HeartIcon className="absolute top-2 right-14 w-9 h-9 rounded-lg p-2.5 bg-white" />
          <CloseIcon
            className="absolute top-2 right-2 w-9 h-9 cursor-pointer rounded-lg p-2.5 bg-white"
            onClick={() => setVisible(false)}
          />
        </div>
        <h3 className="font-semibold text-xl leading-[16.8px] mb-2">
          {item?.name}
        </h3>
        <p className="text-sm leading-[15.4px] mb-2">
          <span className="font-semibold">{item?.price} ₽</span> .
          <span className="text-[rgba(0,0,0,0.4)]"> {item?.weight}г</span>
        </p>
        <p className="mb-4 text-sm text-[rgba(0,0,0,0.65)] leading-[15.4px]">
          {item?.description}
        </p>
        <button className="py-[15px] w-full bg-[#3364E0] text-white rounded-[10px] transition-colors hover:bg-[#486ac0]">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
