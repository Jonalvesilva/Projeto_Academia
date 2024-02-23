import Aula from "./components/Aula";
import { Depoimentos } from "./components/Depoimentos";
import Experiencia from "./components/Experiencia";
import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Resultados from "./components/Resultados";

export default function Home() {
  return (
    <main>
      <Hero />
      <Resultados />
      <Planos />
      <Aula />
      <Experiencia />
      <Depoimentos />
    </main>
  );
}
