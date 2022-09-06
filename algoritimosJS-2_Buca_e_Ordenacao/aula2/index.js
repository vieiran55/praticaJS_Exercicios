// aqui importo o array listaLivros para uma variavel
const listaLivros = require ('./arrays')

// criamos uma função com o parametro array para fazer o algoritimo
// recursão é resolver o problema em partes menores até que o problema seja totalmente resolvido
// o mergeSort só é chamado quando o array é maior que 1
function mergeSort(array) {
  // damos essa condicional para dividir o array em duas partes
  // o mergeSort só é chamado quando o array é maior que 1
  if(array.length > 1) {
    //arrays precisam ser divididos em partes inteiras, entao utilizamos Math.floor para dividir arredondando para baixo e atribuimos a uma variavel
    const meio = Math.floor(array.length / 2);
    // criamos duas variaveis para dividir o array, o primeiro vai até a variavel meio
    // utilizamos o mergeSort para sempre dividir o array e se repetir
    const parte1 = mergeSort(array.slice(0 , meio));
    // criamos outra variavel para colocar a segunda metade do array.
    const parte2 = mergeSort(array.slice(meio, array.length));
    // declaramos a função para ordenar um novo array
    array = ordena(parte1, parte2);
  }

  return array;
}

function ordena (parte1, parte2){
  //declaramos duas variaves com valor de 0 pois as duas partes ja foram divididas e começam do 0
  let posicaoAtualParte1 = 0
  let posicaoAtualParte2 = 0
  let resultado = []

  while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
    // resultado do array parte 1
    let produtoAtualParte1 = parte1[posicaoAtualParte1]
    // resultado do array parte 2
    let produtoAtualParte2 = parte2[posicaoAtualParte2]

    // fazer a comparação para criar o array
    if(produtoAtualParte1.preco < produtoAtualParte2.preco) {
      // mandamos o parametro para o ultima posicao do array
      resultado.push(produtoAtualParte1)
      posicaoAtualParte1++
    }else{
      resultado.push(produtoAtualParte2)
      posicaoAtualParte2++
    }
  }

  // utilizamos concat para pegar os elementos que sobrarem da comparação acima
  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1)
    : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros))