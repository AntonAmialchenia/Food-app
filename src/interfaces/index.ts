export interface IconProps {
  className?: string;
}

export interface Category {
  id: number;
  name: string;
  image_url: string;
}

export interface Dishes extends Category {
  price: number;
  weight: number;
  description: string;
  tegs: string[];
}
