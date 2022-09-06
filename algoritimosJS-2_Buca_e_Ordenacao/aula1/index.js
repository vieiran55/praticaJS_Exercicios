const { edGalho, edFolha } = require('./arrays')

function juntaLista (lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    let produtoAlutalLista1 = lista1[posicaoAtualLista1];
    let produtoAlutalLista2 = lista2[posicaoAtualLista2];

    if (produtoAlutalLista1.preco < produtoAlutalLista2.preco) {
      listaFinal[atual] = produtoAlutalLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAlutalLista2;
      posicaoAtualLista2++;
    }

    atual++
  }

  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++
  }

  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++
  }

  return listaFinal
}

console.log(juntaLista(edGalho, edFolha))