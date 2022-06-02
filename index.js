import { sum, multi, divide, log } from "./mathModules.js";
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
log(chalk.green(typeof sum(1000, -1000)));