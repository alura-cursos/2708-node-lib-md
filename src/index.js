import chalk from 'chalk';
import fs from 'fs';
export default pegaArquivo;

const arrayErrors = {
    'EACCES':'Acesso ao arquivo negado, por favor verifique suas permissões', 
    'EEXIST':'O arquivo exite porém referência outro arquivo não existente',
    'EISDIR':'A operação esperava um arquivo porém encontrou um diretório',
    'ENOENT':'O arquivo ou diretório não existem',
    'ENOTDIR':'Esperava um diretório, porém não encontrou'
};

const enconding = 'utf-8';

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados.length !==0 ? resultados : 'não há listas no arquivo';

}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, arrayErrors[erro.code]));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
         return extraiLinks(texto);
    }
    catch(erro){
        trataErro(erro);
    }

}
