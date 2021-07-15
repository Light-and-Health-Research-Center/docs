import Link from "next/link";

export default function DocLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
}
