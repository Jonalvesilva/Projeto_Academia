export default function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('./hero.jpg')" }}
      className="h-[500px] md:h-[600px] bg-cover bg-center"
    >
      <div className="h-full w-full flex flex-col max-w-screen-xl items-center justify-center mx-auto gap-y-8">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-green-400 shadowText animate__animated animate__lightSpeedInRight">
          Construa seu corpo, <span className="font-bold">build your body</span>
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl w-[60%] text-center animate__animated animate__lightSpeedInLeft">
          Venha treinar na melhor e mais completa academia. Aqui você tem mais
          resultados
        </p>
        <button className="p-2 text-xl text-white bg-green-700 rounded-lg animate__animated animate__fadeIn">
          Conheça mais
        </button>
      </div>
    </section>
  );
}
