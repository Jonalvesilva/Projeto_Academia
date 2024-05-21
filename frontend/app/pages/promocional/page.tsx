"use client";
import { unidades, controlNumber } from "@/app/utils/constants";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInputMask, cpfMask, celPhoneMask } from "react-masked-text";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, User } from "@/app/schemas/userSchema";
import { useState } from "react";

export default function Promocional() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(UserSchema) });

  const onSubmit: SubmitHandler<User> = (data) => {};

  return (
    <section className="w-full border border-b-2 pt-[120px]">
      <div className="text-center text-3xl pb-14">
        <h2>Marque aqui sua aula grátis</h2>
      </div>
      <div className="w-full max-w-screen-lg mx-auto">
        <form
          className="w-[90%] mx-auto lg:w-full lg:mx-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Nome:
                </label>
                <input
                  type="text"
                  {...register("nome")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.nome && (
                  <span className="text-red-500">{`${errors.nome.message}`}</span>
                )}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Sobrenome
                </label>
                <input
                  type="text"
                  {...register("sobrenome")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.sobrenome && (
                  <span className="text-red-500">{`${errors.sobrenome.message}`}</span>
                )}
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
                  {...register("cpf")}
                  onKeyDown={(event) => {
                    if (
                      !controlNumber.includes(event.key) ||
                      event.key === "Dead"
                    ) {
                      event.preventDefault();
                    }
                  }}
                />

                {errors.cpf && (
                  <span className="text-red-500">{`${errors.cpf.message}`}</span>
                )}
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
                  {...register("telefone")}
                  onKeyDown={(event) => {
                    if (
                      !controlNumber.includes(event.key) ||
                      event.key === "Dead"
                    ) {
                      event.preventDefault();
                    }
                  }}
                />
                {errors.telefone && (
                  <span className="text-red-500">{`${errors.telefone.message}`}</span>
                )}
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
                  {...register("unidade")}
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
                  {...register("data")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.data && (
                  <span className="text-red-500">{`${errors.data.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[60%] mx-auto pt-6 pb-16">
            <button className="rounded-md bg-green-600 py-3 w-full text-center text-base font-semibold text-white outline-none">
              Marcar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
