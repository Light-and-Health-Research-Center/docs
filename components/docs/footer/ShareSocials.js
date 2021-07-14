import { Facebook, Linkedin, Twitter } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function ShareSocials({ links }) {
  return (
    <div className="flex gap-4">
      <a
        href={links.facebook}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 ring-barbiePink-60 ring-offset-2 rounded-sm"
      >
        <Facebook color="#1877F2" size={24} />
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 ring-barbiePink-60 ring-offset-2 rounded-sm"
      >
        <Linkedin color="#0A66C2" size={24} />
      </a>
      <a
        href={links.twitter}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 ring-barbiePink-60 ring-offset-2 rounded-sm"
      >
        <Twitter color="#1DA1F2" size={24} />
      </a>
    </div>
  );
}
