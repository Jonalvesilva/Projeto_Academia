"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { linksHeader } from "../utils/constants";
import { useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";

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
    <header id="header" className="bg-emerald-900 h-16 fixed w-full z-[999]">
      <nav className="h-full flex px-4 xl:px-0 items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2 justify-center h-full">
          <Image src={`/logo.png`} height={30} width={65} alt="logo" />
          <span className="text-white text-3xl">Academia do Jon</span>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="hidden lg:flex md:gap-10">
            {linksHeader.map((data) => {
              return (
                <li key={data.name} className="text-white">
                  {data.name}
                </li>
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
      {nav && <SideNavbar nav={nav} setNav={setNav} />}
    </header>
  );
}
