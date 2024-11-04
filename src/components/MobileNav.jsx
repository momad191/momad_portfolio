"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-10 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                MOMAD<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {" "}
                  {link.name}{" "}
                </Link>
              );
            })}
          </nav>
          <SheetHeader>
            <SheetTitle> </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
