import ExperienciaCard from "./ExperienciaCard";
import { experienciaGym } from "../utils/constants";

export default function Experiencia() {
  return (
    <section id="resultado" className="bg-green-900">
      <div className="h-[250px] max-w-screen-xl mx-auto flex items-end justify-center 2xl:justify-start pb-12">
        <h2 className="text-4xl text-white text-center lg:text-start">
          Por que treinar na <span className="font-bold">Academia do Jon?</span>
        </h2>
      </div>
      <div className="bg-white pt-16 pb-[120px] flex items-center justify-center">
        <div className="w-fit grid items-center justify-center gap-y-10 lg:grid-cols-2 lg:gap-x-10 2xl:grid-cols-4">
          {experienciaGym.map(({ desc, url }) => {
            return <ExperienciaCard desc={desc} url={url} key={url} />;
          })}
        </div>
      </div>
    </section>
  );
}
