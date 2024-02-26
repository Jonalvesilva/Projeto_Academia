"use client";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Resultados() {
  return (
    <section id="resultado" className="my-16">
      <div
        className="w-full h-full flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row lg:px-16 lg:gap-x-12
      lg:h-[400px]"
      >
        <div className="flex flex-col items-center gap-y-8 pb-12 lg:pb-0 lg:items-start">
          <h1 className="text-2xl font-bold">
            O melhor lugar para alcançar seus resultados
          </h1>
          <p className="text-center w-[90%] lg:text-start lg:w-full ">
            Além de sermos a academia mais completa do Rio de Janeiro, contamos
            com uma equipe de professores altamente qualificados por um único
            objetivo: Seu resultado.
          </p>
          <div className="flex gap-x-6">
            <Link
              activeClass="active"
              to="planos"
              spy={true}
              smooth={true}
              offset={-10}
              duration={700}
              className="cursor-pointer text-xl text-white bg-cyan-900 p-2"
            >
              Nossos Planos
            </Link>
            <button className="text-xl text-white bg-cyan-500 p-2">
              Marque uma aula grátis
            </button>
          </div>
        </div>
        <div className="flex items-center w-[80%] h-[300px] lg:w-[1200px] lg:h-[350px] lg:max-h-[350px]">
          <img src="./resultado.jpg" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
