import MSLogo from "./MSLogo";
import Link from "next/link";

export default function Footer({ offwhite }) {
  return (
    <div
      className={`${
        offwhite ? "bg-white-off" : ""
      } flex h-12 p-4 justify-center`}
    >
      <Link href="/">
        <a className="h-auto w-20 rounded-sm ms-focus-barbiePink focus:ring-offset-4">
          <MSLogo />
        </a>
      </Link>
      <div className="flex flex-wrap content-center">
        <p className="text-sm mx-2">
          &#169; {new Date().getFullYear()} Light and Health Research Center
        </p>
      </div>
    </div>
  );
}
