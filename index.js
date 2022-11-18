import chalk from 'chalk';
import fs from 'fs';

const arrayErrors = {
    'EACCES':'Acesso ao arquivo negado, por favor verifique suas permissões', 
    'EEXIST':'O arquivo exite porém referência outro arquivo não existente',
    'EISDIR':'A operação esperava um arquivo porém encontrou um diretório',
    'ENOENT':'O arquivo ou diretório não existem',
    'ENOTDIR':'Esperava um diretório, porém não encontrou'
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, arrayErrors[erro.code]));
}
function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro)
}
pegaArquivo('./arquivos/texto.md');
