import fs from "fs";
import chalk from "chalk";

function trataErro(error) {
  throw new Error(chalk.redBright(error));
}

function pegaArquivo(path) {
  fs.promises
    .readFile(path, "utf-8")
    .then((data) => console.log(chalk.green(data)))
    .catch((error) => trataErro(error));
}

pegaArquivo("./texts.md");
