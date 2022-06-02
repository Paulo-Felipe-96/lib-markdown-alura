import fs from "fs";
import chalk from "chalk";

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

pegaArquivo("./texts.md");
