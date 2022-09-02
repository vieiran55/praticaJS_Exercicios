//                   0    1
//######## metodo utilizado para importar o array
const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial){
  let maisBarato = posicaoInicial;
//########## aqi utilizamos o array importado
for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
//####### aqui pegamos o idice do array de valor numerico para poder comparar
  if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
    maisBarato = atual
  }
}
return maisBarato;
}
module.exports = menorValor