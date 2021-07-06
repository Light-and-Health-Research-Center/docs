import Image from "next/image";
import CardPill from "./CardPill";

export default function Card({ card }) {
  return (
    <div className="bg-white-100 rounded-xl drop-shadow-softerBlur cursor-pointer w-full lg:w-1/2-4gap 2xl:w-1/3-4gap group transition-transform duration-150 ease-in-out _hover:hover:drop-shadow-softBlur _hover:hover:-translate-y-1 _hover:hover:scale-103 active:bg-gray-200">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="relative h-36 w-32">
            <Image
              className="rounded-l-xl"
              src={`${card.img_path}`}
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
          <p className="line-clamp-2 transition duration-500 ease-in-out">
            {card.desc}
          </p>
          <div className="relative mt-auto -mr-4 w-full">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-white-100 h-full w-8 group-active:from-gray-200" />
            <div className="w-full flex flex-row gap-2 overflow-x-scroll scrollbar-hide pr-4">
              {card.programs.sort().map((program) => (
                <CardPill key={program} program={program} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
