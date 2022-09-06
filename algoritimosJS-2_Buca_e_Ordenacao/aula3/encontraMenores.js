const listaLivros = require('./array')

// aqui declaramos um pivô para ser o item a ser indicado como principal
// similar ao mergeSort, nós agora dividimos o array com base no pivo
// passamos 2 paramentros obrigatorios para a função
function encontraMenores(pivo, array){

  // definimos o incio da variavel como 0
  let menores = 0

  // neste for utilizamos para fazer o loop pegando o array para parametro
  for(let atual = 0; atual < array.length; atual++){

    // aqui definimos o indice do qual trabalharemos, vamos pegar o item atual com base no array
    let produtoAtual = array[atual]

    //neste if utilizamos o produtoAtual para ser o item a ser verificado se for menor que ao preço do pivo
    if(produtoAtual.preco < pivo.preco){
      //após isso a variavel menores vai ser incrementada
      menores ++
    }
  }

  // aqui retornamos a funcção trocaLugar do array para o pivo utilizando o indexOf
  //      /$/array/$/de onde ele sai/$/entra
  trocaLugar(array, array.indexOf(pivo), menores)
  return array
}

// vamos utilizar essa função para fazer uma troca de cadeiras entrem os elementos
function trocaLugar(array, de, para) {
  const elem1 = array[de]
  const elem2 = array[para]

  array[para] = elem1
  array[de] = elem2
}

// vamo criar essa função para dividir o array no pivo
function divideNoPivo(array){
  // aqui definimos o pivo como sempre no centro
  // array e a posição do pivor
  let pivo = array[Math.floor(array.length / 2)]
  console.log(pivo)

  encontraMenores(pivo, array)
  let valoresMenores = 0

  for(let analisando =0; analisando < array.length; analisando++){
    // devemos puxar o dado que deve ser analisado
    //          array na posição analisando
    let atual = array[analisando];

    //condição da comparação de preço
    if(atual.preco <= pivo.preco && atual !== pivo) {

      // aqui chamamos novamente a função troca de lugar para organizar o array
      //        //array//  //de//       //para//
      trocaLugar(array, analisando, valoresMenores)
      valoresMenores++
    }
  }
  return array;
}

//console.log(divideNoPivo(listaLivros))
// console.log(encontraMenores(listaLivros[2], listaLivros))

module.exports = trocaLugar

