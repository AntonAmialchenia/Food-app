import { FC } from "react";
import ContentLoader from "react-content-loader";

interface LoaderCategoriesProps {}

export const LoaderCategories: FC<LoaderCategoriesProps> = () => {
  return (
    <ContentLoader
      speed={1}
      width={562}
      height={242}
      viewBox="0 0 562 242"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="16" ry="16" width="560" height="240" />
    </ContentLoader>
  );
};
