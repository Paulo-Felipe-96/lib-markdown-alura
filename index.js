import fs from "fs";
import chalk from "chalk";
import regexHttp from "./regexHelpers.js";

const textoPratico = `Eu passo a vida recordando
  De tudo quanto aí deixei
  Cachoeiro, cachoeiro
  Vim pro rio de janeiro
  P'ra voltar e não voltei!
  Mas te confesso na saudade
  As dores que arranjei pra mim
  Pois todo o pranto destas mágoas
  Ainda irei juntar nas águas
  Do teu itapemirim
  Meu pequeno cachoeiro
  Vivo só pensando em ti
  Ai que saudade dessas terras
  Entre as serras
  Doce terra onde eu nasci!`;

function getWords(texto) {
  const regexOne = /C?c?achoeiro*/gm;
  const regexTwo = /.achoeiro*/gm;
  const one = texto.match(regexOne);
  const two = texto.match(regexTwo);

  return {
    one: one,
    two: two,
  };
}

function getLinks(texto) {
  const regex = regexHttp;
  const links = texto.match(regex);
  console.log(links);
}

function trataErro(error) {
  throw new Error(chalk.redBright(error));
}

async function pegaArquivo(path) {
  try {
    const data = await fs.promises.readFile(path, "utf-8");
    console.log(chalk.green(data));
  } catch (e) {
    trataErro(e);
  }
}

console.log(getWords(textoPratico));
