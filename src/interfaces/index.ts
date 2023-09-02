export interface IconProps {
  className?: string;
}

export interface ICategory {
  id: number;
  name: string;
  image_url: string;
}

export interface IDish extends ICategory {
  price: number;
  weight: number;
  description: string;
  tegs: string[];
}
