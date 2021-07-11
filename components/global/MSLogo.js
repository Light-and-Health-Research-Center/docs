import msLogo from "../../public/img/ms_logo.png";
import Image from "next/image";

export default function MSLogo() {
  return (
    <div className="relative h-full w-auto">
      <Image
        className="cursor-pointer"
        src={msLogo}
        alt="Mount Sinai Health Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
