"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export function BottomMenu() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (window.scrollY > 500) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [status]);

  return (
    <div className="h-12 w-12 fixed bottom-2 right-2 z-50 ">
      {status ? (
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-250}
          duration={700}
          className="cursor-pointer  hover:text-green-500 ease-in duration-100 "
        >
          <FaArrowAltCircleUp className="w-12 h-12 text-green-500 animate-bounce" />
        </Link>
      ) : (
        false
      )}
    </div>
  );
}
