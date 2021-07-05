import Image from "next/image";
import books from "../../public/img/undraw/books.svg";

export default function Books() {
  return <Image src={books} width={400} height={400} alt="Lady on books" />;
}
