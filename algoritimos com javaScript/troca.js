function troca(lista, analise) {
  // código aqui
  let itemAnalise = lista[analise];
  let itemAnterior = lista[analise - 1];
 
  lista[analise] = itemAnterior
  lista[analise - 1] = itemAnalise

  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;
    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise);
      analise--
    }
  }
  console.log(lista);
}

module.exports = troca;