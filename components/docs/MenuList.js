import Link from "next/link";

export default function MenuList({ list }) {
  return (
    <ul className="list-disc list-inside mb-4">
      {list.map((el) => (
        <li key={el.path}>
          <Link href={el.path}>
            <a className="text-vividCerulean-100 hover:underline text-sm active:text-vividCerulean-60 focus:outline-none focus:underline">
              {el.frontMatter.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
