import Image from "next/image";

export default function Img({ src, alt, width, height }) {
  return (
    <div className="flex mx-0 md:mx-6 mb-4 pb-2 mt-8 justify-center drop-shadow">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
