"use client";
import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../cliente/styles.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    nav
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "");
    console.log(document.body.style.overflowY);
  }, [nav]);
  return (
    <section className="flex flex-row h-screen md:min-h-[1500px] relative">
      <div
        className={`bg-green-900 h-full fixed md:overflow-scroll md:scrollbar-hidden md:w-[250px] md:fixed md:top-0 md:left-0 ${
          nav
            ? `fixed top-0 left-0 slideIn w-[250px] overflow-scroll`
            : `slideOut w-[45px]`
        }
        `}
      >
        <div className={`w-full flex justify-end md:hidden`}>
          <IoIosMenu
            size={30}
            className={`text-white m-2  ${nav ? "hidden" : ""}`}
            onClick={() => setNav(!nav)}
          />
          <IoIosCloseCircleOutline
            size={30}
            className={`text-white m-2 text-end ${nav ? "" : "hidden"}`}
            onClick={() => setNav(!nav)}
          />
        </div>
        <div
          className={`w-full flex flex-col items-center justify-center py-4 ${
            nav ? "" : "hidden md:flex md:flex-col"
          }`}
        >
          <div className="w-24 h-24">
            <img
              src="https://picsum.photos/200/300"
              className="rounded-full w-full h-full"
            />
          </div>

          <div className="h-full w-full flex items-center justify-center text-center py-10">
            <ul className="flex flex-col">
              <Link
                href={`/pages/cliente/home/`}
                onClick={() => (nav ? setNav(!nav) : "")}
                className="py-3 text-white cursor-pointer hover:text-green-400"
              >
                Home
              </Link>
              <Link
                onClick={() => (nav ? setNav(!nav) : "")}
                href={`/pages/cliente/treinos/`}
                className="py-3 text-white cursor-pointer hover:text-green-400"
              >
                Treinos
              </Link>
              <Link
                onClick={() => (nav ? setNav(!nav) : "")}
                href={`/pages/cliente/config/`}
                className="py-3 text-white cursor-pointer hover:text-green-400"
              >
                Configurações
              </Link>
              <li className="py-3 text-white cursor-pointer hover:text-green-400">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main className="w-full h-screen ml-[45px] md:ml-[250px] md:min-h-full bg-green-100">
        {children}
      </main>
    </section>
  );
}
