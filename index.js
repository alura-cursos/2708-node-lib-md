import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(erro);
}
function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        const arrayErrors = {
            'EACCES':'Acesso ao arquivo negado, por favor verifique suas permissões', 
            'EEXIST':'O arquivo exite porém referência outro arquivo não existente',
            'EISDIR':'A operação esperava um arquivo porém encontrou um diretório',
            'ENOENT':'O arquivo ou diretório não existem',
            'ENOTDIR':'Esperava um diretório, porém não encontrou'
        }

        if(erro){
                    trataErro(chalk.red(erro.code, arrayErrors[erro.code])); 
    }
            console.log(chalk.green(texto));
    } )
}
pegaArquivo('./arquivos/texto.md');
