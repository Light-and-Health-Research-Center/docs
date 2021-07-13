import Link from "next/link";

export default function ProductMenu({ menuObj }) {
  return (
    <div className="col-span-12 lg:col-span-4 mb-4">
      <Link href={menuObj.link}>
        <a className="group focus:outline-none">
          <h6 className="mb-2 text-cetaceanBlue-100 group-hover:underline group-focus:underline active:text-cetaceanBlue-80">
            {menuObj.title}
          </h6>
        </a>
      </Link>

      <ul className="list-type">
        {menuObj.children.map((docObj) => (
          <Link key={docObj.title} href={docObj.link}>
            <a className="group focus:outline-none">
              <li className="text-sm my-6 text-vividCerulean-100 group-hover:underline group-focus:underline active:text-vividCerulean-80">
                {docObj.title}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
