import { modalidadesAcademia } from "../utils/constants";

export default function Aula() {
  return (
    <section
      className=" flex max-w-screen-lg mx-auto flex-col py-12 items-center"
      id="dinner"
    >
      <div>
        <h2 className="text-3xl pb-8">Nossas Modalidades</h2>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16 lg:w-full mb-12">
        {modalidadesAcademia.map((data) => {
          return (
            <div
              className="shadow shadow-black w-[250px] h-[250px] flex flex-col items-center justify-center justify-self-center gap-4 
            scale-100 hover:scale-105 ease-in duration-300 relative rounded-lg"
              key={`${data.nome}`}
            >
              <img src={`${data.imagem}`} className="w-full h-full"></img>
              <p className="uppercase text-md font-bold absolute  bottom-0 right-0 p-1 bg-orange-500">
                {data.nome}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
