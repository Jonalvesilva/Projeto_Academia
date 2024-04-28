"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import * as nLink from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Resultados() {
  const NavigationLink = nLink.default;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="resultado" className="my-16">
      <div
        data-aos="fade-up-left"
        data-aos-once="true"
        data-aos-duration="800"
        className="w-full h-full flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row lg:px-16 lg:gap-x-12
      lg:h-[400px]"
      >
        <div className="flex flex-col items-center gap-y-8 pb-12 lg:pb-0 lg:items-start lg:w-[60%]">
          <h1 className="text-xl font-bold text-center">
            O melhor lugar para alcançar seus resultados
          </h1>
          <p className="text-center w-[90%] lg:text-start lg:w-full ">
            Além de sermos a academia mais completa do Rio de Janeiro, contamos
            com uma equipe de professores altamente qualificados por um único
            objetivo: Seu resultado.
          </p>
          <div className="w-[80%] flex flex-col gap-y-6 md:flex-row md:gap-x-6 lg:w-full">
            <Link
              activeClass="active"
              to="planos"
              spy={true}
              smooth={true}
              offset={-10}
              duration={700}
              className="cursor-pointer text-xl text-white bg-cyan-900 p-2 text-center md:w-[50%] lg:w-[350px]"
            >
              Nossos Planos
            </Link>
            <NavigationLink
              href="/pages/promocional"
              className="text-xl text-white bg-cyan-500 p-2 w-full text-center md:w-[50%] lg:w-[350px]"
            >
              Marque uma aula grátis
            </NavigationLink>
          </div>
        </div>
        <div className="flex items-center w-[80%] lg:max-w-[310px]">
          <img src="./resultado.jpg" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
