
// ###### aqui importamos  o array Lista de livros
const livros = require('./listaLivros');

const troca = require('./troca');

// ###### Aqui iniciamos uma nova função e damos o parametro de lista
function insertionSort(lista) {

// ##### Para ordenar o ciramos o um for com base no tamanho do array.
  for(let atual = 1; atual < lista.length; atual++ ){
      let analise = atual;

      // #### aqui adicionamos um while para verificar qual o menor preco, sempre que o preco atual for menor que o anterior, ambos trocarao de lugar.
      //      item   Menor?         preço                 item anterior preço
      while (analise > 0 && lista[analise].preco < lista[analise - 1].preco){

        //  recebe o item em analise
        let itemAnalise = lista[analise];
        // rebebe o item anterior
        let itemAnterior = lista[analise - 1];

          // recebe o item aterior
        livros[analise] = itemAnterior
          // recebe o item aterior
        livros[analise - 1] = itemAnalise

        // encerra o while
        analise --
      }
    }
  console.log(lista);
}

// inicia a função
insertionSort(livros)