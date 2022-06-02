import fs from "fs";
import chalk from "chalk";

function trataErro(error) {
  throw new Error(chalk.redBright(error));
}

function pegaArquivo(path) {
  /// _, ignora o primeiro parâmetro

  fs.readFile(path, "utf-8", (error, data) => {
    if (error) {
      trataErro(error);
    }

    console.log(chalk.green(data));
  });
}

pegaArquivo("./texts.md");
