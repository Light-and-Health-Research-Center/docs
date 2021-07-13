import Link from "next/link";

export default function ProductMenu({ menuObj }) {
  return (
    <div className="w-full lg:w-1/3-4gap mb-4">
      <Link href={menuObj.link}>
        <a className="text-cetaceanBlue-100">
          <h6 className="mb-2 hover:underline focus:outline-none focus-visible:underline active:text-cetaceanBlue-80">
            {menuObj.title}
          </h6>
        </a>
      </Link>

      <ul className="list-type">
        {menuObj.children.map((docObj) => (
          <Link key={docObj.title} href={docObj.link}>
            <a>
              <li className="text-sm my-6">{docObj.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
