"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/momad/services",
  },
  {
    name: "resume",
    path: "/momad/resume",
  },
  {
    name: "work",
    path: "/momad/work",
  },
  {
    name: "contact",
    path: "/momad/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize hover:text-accent transition-all`}
          >
            {" "}
            {link.name}{" "}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
