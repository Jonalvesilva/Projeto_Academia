import { IoCloseCircle } from "react-icons/io5";
import { linksSideNavbar } from "../utils/constants";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

type props = {
  nav: boolean;
  setNav: (nav: boolean) => void;
};

export default function SideNavbar({ nav, setNav }: props) {
  return (
    <div className="bg-black/60 fixed top-0 left-0 z-10 w-full h-full">
      <div className="fixed h-full w-[450px] bg-white rounded-r-md p-6 overflow-y-scroll animate__animated animate__slideInLeft">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-x-4">
            <Image src={`/logo.png`} height={30} width={50} alt="logo" />
            <span className="text-black text-3xl">Academia do Jon</span>
          </div>
          <IoCloseCircle
            size={40}
            onClick={() => setNav(!nav)}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-16">
          <ul className="flex flex-col">
            {linksSideNavbar.map((data) => {
              return (
                <li
                  key={data.name}
                  className="text-2xl text-start flex gap-x-6 border-y-2 border-gray-100 py-5 cursor-pointer hover:bg-gray-200"
                >
                  {data.icon}
                  {data.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col mt-[100px]">
          <span className="text-2xl text-center">Nossas Redes Sociais</span>
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
