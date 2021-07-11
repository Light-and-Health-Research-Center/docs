import Image from "next/image";
import logistics from "../../public/img/undraw/logistics.svg";

export default function Books() {
  return (
    <Image src={logistics} width={400} height={400} alt="Man moving boxes" />
  );
}
