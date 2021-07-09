import Link from "next/link";

export default function MenuList({ list }) {
  return (
    <ul className="list-disc list-inside">
      {list.map((el) => (
        <li key={el.path}>
          <Link href={el.path}>
            <a>{el.frontMatter.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
