"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { linksHeader } from "../utils/constants";
import { useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import Link from "next/link";

export default function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [nav]);

  return (
    <header
      id="header"
      className="bg-emerald-900 h-16 fixed top-0 left-0 w-full z-[999] min-w-[320px]"
    >
      <nav className="h-full flex px-4 xl:px-0 items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-2 justify-center h-full">
            <Image src={`/logo.png`} height={30} width={65} alt="logo" />
            <span className="text-white text-xl sm:text-2xl md:text-3xl">
              Academia do Jon
            </span>
          </div>
        </Link>
        <div className="flex gap-10 items-center">
          <ul className="hidden lg:flex md:gap-10">
            {linksHeader.map((data) => {
              return (
                <Link href={data.url} key={data.name} className="text-white">
                  {data.name}
                </Link>
              );
            })}
          </ul>
          <FiMenu
            size={30}
            className="text-white cursor-pointer"
            onClick={() => {
              setNav(!nav);
            }}
          />
        </div>
      </nav>
      {<SideNavbar nav={nav} setNav={setNav} />}
    </header>
  );
}
