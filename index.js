import fs from "fs";

import chalk from "chalk";
function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "não ah arquivo no diretorio"));
}

console.log(chalk.blue("ola mundo "));

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";

//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)));
}

pegaArquivo("./arquivos/texto.md");
