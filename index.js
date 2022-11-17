import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(erro);
}
function pegaArquivo(caminhoDoArquivo) {
    const arrayErros = [['EACCES', 'Acesso ao arquivo negado, por favor verifique suas permissões'], 
    ['EEXIST', 'O arquivo exite porém referência outro arquivo não existente'],
    ['EISDIR', 'A operação esperava um arquivo porém encontrou um diretório'],
    ['ENOENT', 'O arquivo ou diretório não existem'],
    ['ENOTDIR', 'Esperava um diretório, porém não encontrou']]
    
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        
        if(erro){
            for(var i = 0; i < 5; i++){
                if(erro.code == arrayErros[i, 0]){
                    trataErro(chalk.red(erro.code, arrayErros[1, i]));
                }
        }
    }
            console.log(chalk.green(texto));
    } )
}
pegaArquivo('./arquivos/');