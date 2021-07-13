export default function TOC({ toc, sticky }) {
  return (
    <div className={`${sticky ? "sticky top-0 lg:pt-8" : "mt-8"}`}>
      <h6 className="border-b">In this article</h6>
      <ul>
        {toc.map((heading) => (
          <li key={heading.text}>
            <a
              className="text-sm focus:outline-none text-vividCerulean-100 hover:underline focus:underline active:text-vividCerulean-80"
              href={heading.link}
              dangerouslySetInnerHTML={{ __html: heading.text }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
}
