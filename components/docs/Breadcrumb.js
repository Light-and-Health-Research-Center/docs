import Link from "next/link";

export default function Breadcrumb({ structure, slug, title }) {
  function getText(idx) {
    if (idx === 0) return title;
    if (idx === 1) {
      for (const obj of structure) {
        if (slug[idx] === cleanPath(Object.keys(obj)[0]))
          return Object.keys(obj)[0];
      }
    }
    if (idx === 2) {
      for (const obj of structure) {
        for (const arrVal of Object.values(obj)[0]) {
          if (slug[idx] === cleanPath(arrVal)) return arrVal;
        }
      }
    }
  }

  function getHrefs(slug) {
    let ret = [...slug];
    ret[0] = `/${ret[0]}`;
    for (let i = 1; i < ret.length; i++) {
      ret[i] = `${ret[i - 1]}/${ret[i]}`;
    }
    return ret;
  }

  function lastLink(idx) {
    return idx === slug.length - 1;
  }

  function cleanPath(raw) {
    return raw.toLowerCase().replace(/\s/g, "-");
  }

  let hrefs = getHrefs(slug);
  return (
    <nav>
      {slug.map((_, idx) => (
        <Link href={hrefs[idx]} key={idx}>
          <a className="group inline-block focus:outline-none">
            <p>
              <span
                className={` ${
                  lastLink(idx)
                    ? ""
                    : "text-vividCerulean-80 group-hover:underline"
                } text-sm group-active:text-vividCerulean-100 group-focus-visible:underline`}
              >
                {getText(idx)}
              </span>
              <span
                className={` ${
                  lastLink(idx) ? "hidden" : ""
                } text-black-60 text-sm px-2`}
              >
                /
              </span>
            </p>
          </a>
        </Link>
      ))}
    </nav>
  );
}
