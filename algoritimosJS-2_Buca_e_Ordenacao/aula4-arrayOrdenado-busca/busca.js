const listaLivros = require('./arrayOrdenado')

// vamos criar um algoritimo de busca binária, ele precisa que array esteja ordenado pra funcionar.
// aqui vamos trabalhar com a ideia de dividir para conquistar
//             array // de onde estamos // para onde vamos // qual o valor buscado
function busca(array,       de,              ate,                 valorBuscado){
  console.log('de, ate', de, ate)
  // aqui vamos buscar o meio do array 
  const meio = Math.floor((de + ate) / 2)
  // aqui vamos descobrir o valor atal
  const atual = array[meio];

  //aqui vamos criar uma condição para encerrar a função caso o parametro não seja encontrado
  if (de > ate) {
    return -1;
  }

  // aqui não é necessario buscar pois o valor vai ser igual ao preço
  if(valorBuscado === atual.preco){
    return meio
  }
  // aqui vamos buscar o valor se ele for menor que o preço
  if(valorBuscado < atual.preco){
    return busca(array, de, meio - 1, valorBuscado)
  }
  // aqui vamos buscar o valor se ele for maior que o preço
  if(valorBuscado > atual.preco){
    return busca(array, meio + 1, ate, valorBuscado)
  }
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 36))