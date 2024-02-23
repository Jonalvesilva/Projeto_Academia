export default function Planos() {
  return (
    <section className="py-20 relative z-50 bg-black/95 bg-cover">
      <div className="container mx-auto ">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-medium text-white tracking-widest">
            Nossos Preços
          </span>
          <h2 className="md:text-5xl text-3xl text-white font-medium tracking-tight mt-7">
            Nossos Planos
          </h2>
          <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-amber-500 to-green-500 h-[2px]"></div>
          <p className="mt-6 text-xl/8 text-white">
            Confira aqui nossos planos promocionais. Os melhores equipamentos e
            infraestrutura com preços acessíveis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  2xl:grid-cols-3 gap-10 2xl:px-28 mt-20 lg:px-10">
        <div className="flex flex-col bg-white rounded-xl overflow-hidden w-[50%] mx-auto 2xl:w-[400px]">
          <div className="text-center pt-10">
            <h5 className="text-xl font-semibold">Basic</h5>
            <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
              <sup className="text-2xl align-middle">R$</sup>129
            </h2>
            <span>por mês</span>
          </div>

          <div className="p-10">
            <ul className="mb-10 text-center">
              <li className="my-4">
                <h5 className="font-medium dark:text-gray-300">
                  Área de musculação e aeróbicos
                </h5>
              </li>
              <li>
                <h5 className="font-medium dark:text-gray-300 line-through ">
                  Lutas e Aulas de Dança
                </h5>
              </li>
              <li className="my-4">
                <h5 className="font-medium dark:text-gray-300 line-through">
                  Leve amigos para treinar com você
                </h5>
              </li>
            </ul>
            <div className="flex justify-center">
              <a
                href="#"
                className="py-3 px-6 font-medium border rounded-md border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-500"
              >
                Escolher Basic
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl overflow-hidden w-[50%] mx-auto 2xl:w-[400px]">
          <div className="text-center pt-10">
            <h5 className="text-xl font-semibold">Advance</h5>
            <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
              <sup className="text-2xl align-middle">R$</sup>139
            </h2>
            <span>por mês</span>
          </div>

          <div className="p-10">
            <ul className="mb-10 text-center">
              <li className="my-4">
                <h5 className="font-medium dark:text-gray-300">
                  Área de musculação e aeróbicos
                </h5>
              </li>
              <li>
                <h5 className="font-medium dark:text-gray-300">
                  Lutas e Aulas de Dança
                </h5>
              </li>
              <li className="my-4">
                <h5 className="font-medium dark:text-gray-300 line-through">
                  Leve amigos para treinar com você
                </h5>
              </li>
            </ul>
            <div className="flex justify-center">
              <a
                href="#"
                className="py-3 px-6 font-medium border rounded-md border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-500"
              >
                Escolher Advance
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl overflow-hidden w-[50%] mx-auto 2xl:w-[400px]">
          <div className="text-center pt-10">
            <h5 className="text-xl font-semibold">Monster</h5>
            <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
              <sup className="text-2xl align-middle">R$</sup>189
            </h2>
            <span>por mês</span>
          </div>

          <div className="p-10">
            <ul className="mb-10 text-center">
              <li className="my-4">
                <h5 className="font-medium dark:text-gray-300">
                  Área de musculação e aeróbicos
                </h5>
              </li>
              <li>
                <h5 className="font-medium dark:text-gray-300">
                  Lutas e Aulas de Dança
                </h5>
              </li>
              <li className="my-4">
                <h5 className="font-medium dark:text-gray-300">
                  Leve amigos para treinar com você
                </h5>
              </li>
            </ul>
            <div className="flex justify-center">
              <a
                href="#"
                className="py-3 px-6 font-medium border rounded-md border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-500"
              >
                Escolher Monster
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
