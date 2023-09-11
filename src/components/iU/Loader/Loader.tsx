import { FC } from "react";
import ContentLoader from "react-content-loader";

interface LoaderProps {
  variant: "category" | "dish";
}

export const Loader: FC<LoaderProps> = ({ variant }) => {
  return (
    <>
      {variant === "category" ? (
        <ContentLoader
          className="w-full"
          speed={1}
          width={562}
          height={242}
          viewBox="0 0 562 242"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect
            className="w-full"
            x="0"
            y="0"
            rx="16"
            ry="16"
            width="560"
            height="240"
          />
        </ContentLoader>
      ) : (
        <ContentLoader
          className="w-full"
          speed={1}
          width={220}
          height={290}
          viewBox="0 0 220 290"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="2" y="0" rx="12" ry="12" width="216" height="217" />
          <rect x="2" y="233" rx="5" ry="5" width="150" height="25" />
        </ContentLoader>
      )}
    </>
  );
};
