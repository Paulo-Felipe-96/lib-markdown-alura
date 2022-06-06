import fs from "fs";
import chalk from "chalk";
import regexHttp from "./regexHelpers.js";

function getLinks(texto) {
  const regex = regexHttp;
  const results = [];
  let temp;

  while ((temp = regex.exec(texto)) !== null) {
    results.push({
      [temp[1]]: temp[2],
    });
  }
  return results;
}

function throwError(error) {
  throw new Error(chalk.redBright(error));
}

async function getFile(path) {
  try {
    const data = await fs.promises.readFile(path, "utf-8");
    return console.log(getLinks(data));
  } catch (e) {
    throwError(e);
  }
}

getFile("./text.md");
