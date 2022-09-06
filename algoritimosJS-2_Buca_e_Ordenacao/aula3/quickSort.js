const listaLivros = require('./array')
const trocaLugar = require('./encontraMenores')

// aqui faremos a funcção quickSort que se trata de uma função para localizar elemento dentro do array apartir de quebras
// elementos=>    //array//esquerda//direita
function quickSort(array, esquerda, direita) {

  // irá executar apenas se o array for maior q 1
  if (array.length > 1) {
    //recebe tambem a posição dos elementos do array
    let indiceAtual = particiona(array, esquerda, direita);

    // controlando o indice de valor atual caso comece da esquerda
    if (esquerda < indiceAtual -1){

      quickSort(array, esquerda, indiceAtual - 1);
    }
    // controlando o indice de valor atual caso comece da direita
    if (indiceAtual < direita){
      quickSort(array, indiceAtual, direita)
    }
  }
  return array;
}

function particiona(array, esquerda, direita) {
  // para encontrar o pivo, que será o elemento principal da função, faremos a sua localização pela operação matematica
  let pivo = array[Math.floor((esquerda + direita) / 2)]

  // criamos essas duas variaveis para controlar a posição do elemento que está sendo verificado
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  //definiremos o quanto esse algoritimo vai funcionar com while
  while (atualEsquerda <= atualDireita) {

    // vamos controlar o quanto o while vai executar da esqueda para a direita
    // compara e incrementa
    while (array[atualEsquerda].preco < pivo.preco) {
      //incrementa
      atualEsquerda++
    }
    // vamos controlar o quanto o while vai executar da direita para a esquerda
    // compara e decrementa
    while (array[atualDireita].preco > pivo.preco) {
      //decrementa
      atualDireita--
    }

    //compara e troca de lugar
    if (atualEsquerda <= atualDireita) {
      //aqui utilizaremos a função que foi criada no arquivo EncotraMenores
      //        array     de            para
      trocaLugar(array, atualEsquerda, atualDireita);
      // para o indice continuar andando
      atualEsquerda++;
      atualDireita--;
    }
  }
  // aqui ela deve retornar a posição indice que parou para que seja feita no proximo loop a partir dauqui
  return atualEsquerda;
}

//                     array      primeira      ultimo elemento
console.log(quickSort(listaLivros, 0, listaLivros.length - 1))