"use client";
import { useState } from "react";
import Image from "next/image";
import { CustomImageProps } from "@/types/types";

const placeholderImageUrl = "https://placehold.co/150x150";

const CustomImage = (props: CustomImageProps) => {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc(props.placeholderimg || placeholderImageUrl)}
    />
  );
};

export default CustomImage;
