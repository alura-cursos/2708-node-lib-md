import chalk from 'chalk';

import fs from 'fs';

function trataErro (erro) {
    throw new Error(erro);
}

function pegaArquivo (caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }

        console.log(chalk.bgGray(texto));
    })
}

pegaArquivo('./arquivos/texto.md');
