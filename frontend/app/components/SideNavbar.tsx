import { IoCloseCircle } from "react-icons/io5";
import { linksSideNavbar } from "../utils/constants";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type props = {
  nav: boolean;
  setNav: (nav: boolean) => void;
};

export default function SideNavbar({ nav, setNav }: props) {
  useEffect(() => {
    if (!nav) {
      setTimeout(() => {
        document.getElementById("mobileMenu")?.classList.add("hidden");
      }, 500);
    } else {
      document.getElementById("mobileMenu")?.classList.remove("hidden");
    }
  }, [nav]);

  return (
    <div
      className="bg-black/60 fixed top-0 left-0 z-10 w-full h-full"
      id="mobileMenu"
    >
      <div
        className={`fixed h-full w-[90%] max-w-[450px] bg-white rounded-r-md p-6 overflow-y-scroll animate__animated ${
          nav ? "animate__slideInLeft" : "animate__slideOutLeft"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-x-4">
            <Image src={`/logo.png`} height={30} width={40} alt="logo" />
            <span className="text-black text-md min-[400px]:text-xl">
              Academia do Jon
            </span>
          </div>
          <IoCloseCircle
            size={30}
            onClick={() => setNav(!nav)}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-16">
          <ul className="flex flex-col">
            {linksSideNavbar.map((data) => {
              return (
                <Link
                  href={data.url}
                  key={data.name}
                  onClick={() => setNav(!nav)}
                  className="text-lg min-[400px]:text-2xl text-start flex gap-x-6 border-t-2 border-gray-100 py-5 cursor-pointer hover:bg-gray-200"
                >
                  {data.icon}
                  {data.name}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col mt-[50px]">
          <span className="text-lg min-[400px]:text-2xl text-center">
            Nossas Redes Sociais
          </span>
          <div className="w-[80%] mx-auto mt-8 flex justify-center gap-x-8">
            <FaFacebook size={50} className="text-blue-500 cursor-pointer" />
            <FaInstagram size={50} className="text-pink-500 cursor-pointer" />
            <FaLinkedin size={50} className="text-blue-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
