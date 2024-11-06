"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          {" "}
          <h1 className="text-4xl font-semibold ">
            MOMAD<span className="text-accent text-6xl">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/momad/contact">
            <Button> Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
