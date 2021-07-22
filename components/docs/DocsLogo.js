import Link from "next/link";
import MSLogo from "../global/MSLogo";

export default function DocsLogo({ stacked, offwhite, img_width, img_height }) {
  return (
    <div>
      <div className="flex h-full">
        <Link href="/">
          <a
            className={`${
              stacked ? "" : "flex"
            } rounded-sm ms-focus-barbiePink ring-offset-4 ${
              offwhite ? "ring-offset-white-off" : ""
            }`}
          >
            <div className={`${img_height} ${img_width} mx-auto`}>
              <MSLogo />
            </div>

            <h4 className="my-auto pl-2 whitespace-nowrap">
              <span className="hidden sm:inline-block">Light and Health</span>{" "}
              Docs
            </h4>
          </a>
        </Link>
      </div>
    </div>
  );
}
