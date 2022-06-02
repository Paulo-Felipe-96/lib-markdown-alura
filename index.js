import { sum, multi, divide } from "./mathModules.js";
import chalk from "chalk";

console.log(chalk.blue("vamos começar"));

const paragrafo = "Texto retornado por uma função";

function retornaTexto(text) {
  return console.log(text);
}

retornaTexto(paragrafo);

console.log(sum(10, 10));
console.log(multi(10, 10));
console.log(divide(10, 10));