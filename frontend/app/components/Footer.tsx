import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="h-[400px] flex flex-col max-w-screen-xl mx-auto lg:flex-row">
        <div className=" w-full h-[200px] lg:h-[400px] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-4">
            <Image src={`/logo.png`} height={50} width={50} alt="logo" />
            <span className="text-3xl">Academia do Jon</span>
          </div>
          <p className="text-center text-xl mt-6">
            A melhor academia do Rio de Janeiro
          </p>
        </div>
        <div className=" w-full h-[200px] lg:h-[400px] flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Horário de Funcionamento</h2>
          <span className="font-semibold mb-3">
            Segunda a Sexta:
            <span className="pl-1 font-medium text-gray-700">
              06:00 as 23:00
            </span>
          </span>
          <span className="font-semibold">
            Sabados e Domingos:
            <span className="pl-1 font-medium text-gray-700">
              08:00 as 21:00
            </span>
          </span>
        </div>
      </div>
      <div className="bg-green-900 h-16 text-white flex items-center justify-center text-center ">
        Copyright © 2024 AVEC. Todos os direitos reservados.
      </div>
    </footer>
  );
}
