import Image from "next/image";
import Link from "next/link";
import CardPill from "./CardPill";

export default function Card({ card }) {
  return (
    <Link href={card.path}>
      <a className="bg-white-100 rounded-xl drop-shadow-softerBlur cursor-pointer w-full lg:w-1/2-4gap 2xl:w-1/3-4gap transition duration-150 ease-in-out  _hover:hover:-translate-y-1 _hover:hover:scale-102 ms-focus-barbiePink">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="relative h-40 w-28 xs:h-44 xs:w-36">
              <Image
                className="rounded-l-xl"
                src={`${card.card_img}`}
                alt={`${card.title} Card Image`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col p-2 px-4 overflow-hidden">
            <h4 className="w-min truncate transition duration-500 ease-in-out">
              {card.title}
            </h4>
            <p className="line-clamp-3 transition duration-500 ease-in-out">
              {card.desc}
            </p>
            <div className="relative mt-auto w-full">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-white-100 h-full w-5" />
              <div className="w-full flex flex-row gap-2 overflow-x-scroll scrollbar-hide pr-4">
                {card.programs.sort().map((program) => (
                  <CardPill key={program} program={program} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
