import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ImageGalleryImageLink({ link, linkInternal, children }) {
  return link ? (
    <Link href={link}>
      <a
        className="block w-full h-full ms-focus-barbiePink rounded-md ring-offset-4 transition-transform duration-250 ease-in-out hover:scale-105 hover:-translate-y-1"
        target={linkInternal ? "_self" : "_blank"}
        rel="noreferrer"
      >
        <div>{children}</div>
      </a>
    </Link>
  ) : (
    children
  );
}

export function ImageGalleryImage({
  height,
  cols,
  src,
  alt,
  link,
  linkInternal = false,
}) {
  const TWHeights = {
    default: "h-32",
    xxs: "h-6",
    xs: "h-12",
    sm: "h-20",
    md: "h-32",
    lg: "h-56",
    xl: "h-72",
    xxl: "h-96",
  };

  const TWCols = {
    default: "md:w-1/2-8gap",
    2: "md:w-1/2-8gap",
    3: "md:w-1/3-8gap",
    4: "md:w-1/4-8gap",
    5: "md:w-1/5-8gap",
    6: "md:w-1/6-8gap",
    12: "md:w-1/12-8gap",
  };

  return (
    <div
      className={`${TWHeights[height]} w-full ${TWCols[cols]} relative mx-auto`}
    >
      <ImageGalleryImageLink link={link} linkInternal={linkInternal}>
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </ImageGalleryImageLink>
    </div>
  );
}

export function ImageGallery({ height = "md", cols = 2, children }) {
  return (
    <div className="flex flex-wrap gap-8 my-8">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { height, cols });
      })}
    </div>
  );
}
