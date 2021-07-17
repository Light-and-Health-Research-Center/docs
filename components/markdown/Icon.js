import { MailIcon } from "@heroicons/react/outline";

export default function Icon({ icon, inline = true, size = "sm" }) {
  const sizes = {
    xs: {
      width: "w-3",
      height: "h-3",
    },
    sm: {
      width: "w-5",
      height: "h-5",
    },
    md: {
      width: "w-8",
      height: "h-8",
    },
    lg: {
      width: "w-12",
      height: "h-12",
    },
    xl: {
      width: "w-16",
      height: "h-16",
    },
  };

  switch (icon) {
    case "mail":
      return (
        <MailIcon
          className={`${sizes[size].width} ${sizes[size].height} text-base ${
            inline ? "inline-block" : "block"
          }`}
        ></MailIcon>
      );
  }
  return <div></div>;
}
