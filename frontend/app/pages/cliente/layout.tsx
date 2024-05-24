"use client";
import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import "../cliente/styles.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, setNav] = useState(false);

  return (
    <section className="flex flex-row">
      <div
        className={`bg-green-900 md:w-[250px] h-screen ${
          nav ? `absolute top-0 left-0 slideIn w-[250px]` : `slideOut w-[45px]`
        }
        }`}
      >
        <div
          className={`w-full animate__animated ${
            nav ? "flex justify-end" : ""
          } md:hidden`}
        >
          <IoIosMenu
            size={30}
            className={`text-white m-2 ${nav ? "hidden" : ""}`}
            onClick={() => setNav(!nav)}
          />
          <IoIosCloseCircleOutline
            size={30}
            className={`text-white m-2 text-end ${nav ? "" : "hidden"}`}
            onClick={() => setNav(!nav)}
          />
        </div>
      </div>
      <main>{children}</main>
    </section>
  );
}
