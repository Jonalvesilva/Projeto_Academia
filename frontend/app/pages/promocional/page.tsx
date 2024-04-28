"use client";
import { unidades, controlNumber } from "@/app/utils/constants";
import React from "react";
import { TextInputMask, cpfMask, celPhoneMask } from "react-masked-text";

type User = {
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  unidade: string;
  data: string;
};

export default function Promocional() {
  return (
    <section className="border border-b-2 pt-[100px]">
      <div className="text-center text-3xl pb-14">
        <h2>Marque aqui sua aula grátis</h2>
      </div>
      <div className="w-full max-w-screen-lg mx-auto">
        <form className="w-[90%] mx-auto lg:w-full lg:mx-0">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Nome:
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Sobrenome
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  CPF:
                </label>
                <TextInputMask
                  mask={cpfMask()}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onKeyDown={(event) => {
                    if (
                      !controlNumber.includes(event.key) ||
                      event.key === "Dead"
                    ) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Telefone
                </label>
                <TextInputMask
                  mask={celPhoneMask()}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onKeyDown={(event) => {
                    if (
                      !controlNumber.includes(event.key) ||
                      event.key === "Dead"
                    ) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Unidade:
                </label>
                <select
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                focus:border-[#6A64F1] focus:shadow-md"
                >
                  {unidades.map((data) => {
                    return (
                      <option value={data.name} key={`${data.name}_key`}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Data & Hora
                </label>
                <input
                  type="datetime-local"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[60%] mx-auto pt-6">
            <button className="rounded-md bg-green-600 py-3 w-full text-center text-base font-semibold text-white outline-none">
              Marcar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
