import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Resultados from "./components/Resultados";

export default function Home() {
  return (
    <main>
      <Hero />
      <Resultados />
      <Planos />
    </main>
  );
}
