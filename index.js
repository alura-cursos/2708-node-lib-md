import chalk from 'chalk';

import fs from 'fs';

function pegaArquivo (caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.greenBright(texto));
    })
}

pegaArquivo('./arquivos/texto.md');
