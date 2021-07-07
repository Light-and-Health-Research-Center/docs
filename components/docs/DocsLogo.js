import Link from "next/link";
import MSLogo from "../global/MSLogo";

export default function DocsLogo({ offwhite }) {
  return (
    <Link href="/../">
      <a
        className={`flex rounded-sm ms-focus-barbiePink ring-offset-4 ${
          offwhite ? "ring-offset-white-off" : ""
        }`}
      >
        <div>
          <MSLogo />
        </div>
        <h4 className="my-auto pl-2 text-sm md:text-lg">
          Light and Health Docs
        </h4>
      </a>
    </Link>
  );
}
