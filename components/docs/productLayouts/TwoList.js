import Link from "next/link";

export default function TwoList({ productData, frontMatter }) {
  const layoutData = frontMatter.layoutData;
  return (
    <div className="grid grid-cols-12 gap-0 lg:gap-8">
      <div className=" col-span-12 lg:col-span-7">
        <h5 className="mb-4">{layoutData.list1.title}</h5>
        <ul>
          {layoutData.list1.children.map((child) => (
            <Link key={child.title} href={child.link}>
              <a className="group focus:outline-none">
                <li className="py-4 border-t">
                  <h6 className="text-vividCerulean-100 group-hover:underline group-focus:underline active:text-vividCerulean-80">
                    {child.title}
                  </h6>
                  <p className="line-clamp-3">{child.desc}</p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <h5 className="mb-4">{layoutData.list2.title}</h5>
        <ul>
          {layoutData.list2.children.map((child) => (
            <Link key={child.title} href={child.link}>
              <a className="group focus:outline-none">
                <li className="py-2 border-t">
                  <p className="text-vividCerulean-100 group-hover:underline group-focus:underline active:text-vividCerulean-80">
                    {child.title}
                  </p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
