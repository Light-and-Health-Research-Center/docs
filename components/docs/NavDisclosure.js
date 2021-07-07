import React from "react";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function NavDisclosure({ structure, path, slug }) {
  function cleanPath(raw) {
    return raw.toLowerCase().replace(/\s/g, "-");
  }

  function active(_slug) {
    return cleanPath(_slug) == slug[slug.length - 1];
  }

  return (
    <>
      {structure.map((menu) => (
        <Disclosure key={Object.keys(menu)[0]}>
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex justify-between w-full py-2 focus:outline-none">
                <h6
                  className={
                    "group-focus:text-cetaceanBlue-60 transition duration-250 ease-in-out group-hover:text-cetaceanBlue-60"
                  }
                >
                  {Object.keys(menu)[0]}
                </h6>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } text-cetaceanBlue-60 px-2 w-9`}
                />
              </Disclosure.Button>
              {Object.values(menu)[0].map((slug) => (
                <Link
                  href={`${path}/${cleanPath(Object.keys(menu)[0])}/${cleanPath(
                    slug
                  )}`}
                  key={slug}
                >
                  <a className="group focus:outline-none">
                    <Disclosure.Panel>
                      <div
                        className={`${
                          active(slug)
                            ? "border-l-2 border-vividCerulean-80"
                            : "border-l-2"
                        } p-2 py-1  cursor-pointer`}
                      >
                        <p
                          className={`${
                            active(slug)
                              ? "text-vividCerulean-80 translate-x-1"
                              : ""
                          } text-sm transition-transform ease-in-out duration-250 border-vividCerulean-100 group-hover:text-vividCerulean-80 group-hover:translate-x-1 group-active:text-vividCerulean-100 group-focus:text-vividCerulean-100 group-focus:translate-x-1`}
                        >
                          {slug}
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </a>
                </Link>
              ))}
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
}
