import Image from "next/image";
import CardPill from "./CardPill";

export default function Card({ card }) {
  return (
    <div className="bg-white-100 rounded-xl drop-shadow-softerBlur cursor-pointer w-full lg:w-1/2-4gap 2xl:w-1/3-4gap group transition duration-150 ease-in-out hover:drop-shadow-softBlur hover:-translate-y-1 hover:scale-103">
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
        <div className="flex flex-col p-2 px-4 overflow-hidden">
          <h4 className="truncate transition duration-500 ease-in-outgroup-hover:text-stPatricksBlue-100">
            {card.title}
          </h4>
          <p className="line-clamp-2 transition duration-500 ease-in-out group-hover:text-black-80">
            {card.desc}
          </p>
          <div className="relative mt-auto -mr-4">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-white-100 h-full w-1/12" />
            <div className=" flex flex-row gap-2 overflow-x-scroll scrollbar-hide pr-4">
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
