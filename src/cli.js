import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from 'chalk';
const argumentos = process.argv;

function imprimeLista(valida,resultado,identificador = ''){
    if(valida){
    console.log(chalk.yellow('lista validada'), chalk.black.bgGreen(identificador), listaValidada(resultado));
    } else{
    console.log(chalk.yellow('lista de links'), chalk.black.bgGreen(identificador), resultado);
    }
}
async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';
    console.log(valida)
    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho)
        imprimeLista(valida, resultado);

    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomeDeArquivo) =>{
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo)
        })
    }
}

processaTexto(argumentos);