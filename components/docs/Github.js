import Octicon, { markGithub } from "octicons-react";
import Link from "next/link";

export default function Github({ github }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(github.date);
  const link = github.link;
  return (
    <div className="mt-8">
      <Link href={link}>
        <a target="_blank" className="github">
          <span className="mr-2">
            <Octicon icon={markGithub} />
          </span>
          Last updated: {months[date.getMonth()]}{" "}
          {("0" + date.getDate()).slice(-2)}, {date.getFullYear()}
        </a>
      </Link>
    </div>
  );
}
