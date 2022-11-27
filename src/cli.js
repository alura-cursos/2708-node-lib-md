import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from 'chalk';
const argumentos = process.argv;

function imprimeLista(resultado,identificador = ''){
    console.log(chalk.yellow('lista de links'), chalk.black.bgGreen(identificador), resultado)
}
async function processaTexto(argumentos){
    const caminho = argumentos[2]

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho)
        imprimeLista(resultado);

    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomeDeArquivo) =>{
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(lista, nomeDeArquivo)
        })
    }
}

processaTexto(argumentos);