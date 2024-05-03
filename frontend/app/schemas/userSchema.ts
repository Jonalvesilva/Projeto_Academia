import { z } from "zod";

let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const errorMsg = [
  "",
  "Data Inválida",
  "Data escolhida inferior a data atual",
  "Sabados e Domingos das 8h as 21h",
  "Segunda a Sexta das 6h as 23h",
];
let message = { message: errorMsg[0] };

const dataSchema = z.custom((data: any) => {
  if (!(data instanceof Date)) {
    if (data == "") {
      message.message = errorMsg[1];
      return false;
    }
    const value = new Date(data);
    if (value < yesterday) {
      message.message = errorMsg[2];
      return false;
    }

    const day = value.getDay();
    const horaAtual = value.getHours();

    if (day == 0 || day == 6) {
      if (horaAtual < 8 || horaAtual > 21) {
        message.message = errorMsg[3];
        return false;
      }
    } else {
      if (horaAtual < 6 || horaAtual > 23) {
        message.message = errorMsg[4];
        return false;
      }
    }

    return data;
  }
}, message);

export const UserSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome deve conter pelo menos 3 caracteres" }),
  sobrenome: z
    .string()
    .min(3, { message: "Sobrenome deve conter pelo menos 3 caracteres" }),
  cpf: z.string().min(11, { message: "Cpf deve conter no minimo 11 digitos" }),
  telefone: z
    .string()
    .min(10, { message: "Telefone deve no minimo 10 digitos" }),
  unidade: z.string(),
  data: dataSchema,
});

export type User = z.infer<typeof UserSchema>;
