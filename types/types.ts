export type Beer = {
  price: string;
  name: string;
  rating: { average: number; reviews: number };
  image: string;
  id: number;
};

export type CustomImageProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  unoptimized?: boolean;
  placeholderimg?: string;
};

export type PageProps = {
  params: {
    beerId: string;
  };
};
