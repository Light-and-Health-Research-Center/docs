import logo from "../../public/img/lhrc_logo.png";
import Image from "next/image";

export default function MSLogo() {
  return (
    <div className="relative h-full w-auto">
      <Image
        className="pointer"
        src={logo}
        alt="Mount Sinai Health Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
