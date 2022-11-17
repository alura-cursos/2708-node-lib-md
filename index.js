import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(erro);
}
function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if(erro){
            trataErro(chalk.red(erro.code, 'não há arquivo no diretório'));
        }
        console.log(chalk.green(texto));
    } )
}
pegaArquivo('./arquivos/texto.md'); 