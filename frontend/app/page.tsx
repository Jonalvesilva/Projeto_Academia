"use client";
import { useEffect } from "react";
import Aula from "./components/Aula";
import { BottomMenu } from "./components/BottomMenu";
import { Depoimentos } from "./components/Depoimentos";
import Experiencia from "./components/Experiencia";
import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Resultados from "./components/Resultados";

export default function Home() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].classList.remove("hidden");
    document.getElementsByTagName("footer")[0].classList.remove("hidden");
  });
  return (
    <main className="w-full">
      <Hero />
      <Resultados />
      <Planos />
      <Aula />
      <Experiencia />
      <Depoimentos />
      <BottomMenu />
    </main>
  );
}
