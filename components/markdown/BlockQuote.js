export default function BlockQuote({ by, ref_num, children }) {
  return (
    <div className="mb-8">
      <blockquote>
        <div className="stylistic-quote-mark" aria-hidden="true">
          &ldquo;
        </div>
        {children}
      </blockquote>
      <div className="flex justify-end pr-4">
        - {by} {ref_num && <b className="ml-2"> ({ref_num})</b>}
      </div>
    </div>
  );
}
