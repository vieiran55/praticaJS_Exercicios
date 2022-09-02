var resultado = document.getElementById('resultado')
var nomes = document.getElementById('nomes')
var deuses = ["Aegir", "Aud", "Balder"]
var numeros = [5, 7, 1, 8, 9]
// var deuses2 = ["Aegir", "Aud", "Balder", "Bagri", "Búri", "Dag", "Dellingr"]




function arraysJS() {

  //################## aqui eu criei uma função para acrescentar os itens do array deuses2 a cada clique no botão. criei a variavel lista para receber o id da div nomes. após isso criei um loop com o for para adicionar a lista a cada vez que o numero de itens for atingido.

  var deuses2 = ["Aegir", "Aud", "Balder", "Bagri", "Búri", "Dag", "Dellingr"]
  var lista = document.getElementById("nomes")
  for(var i = 0; i < deuses2.length; i++){
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(deuses2[i]));
    lista.appendChild(item);
  }


  // alert(deuses)
  // resultado.innerHTML = `${deuses}`

  //########### aqui criei uma variavel(novaUl) para crial uma "ul", em seguigda criei uma variavel(conteudoNovo), para definir o texto que sera acrescentado a essa ul, adicionei a classe "titulo" (classList) e .appenChild para criar um novo nó. Criei uma varival para receber a div que essa "ul" será adicionada. Utilizei .insertBefore para adiconar essa "ul" antes da div "resultado"

  // var novaUl = document.createElement("ul");
  // var conteudoNovo = document.createTextNode(deuses2)
  // novaUl.classList.add("titulo")
  // novaUl.appendChild(conteudoNovo)

  // var divAtual = document.getElementById("resultado");
  // document.body.insertBefore(novaUl, divAtual)

  // var newDeuses = deuses.map(upDeuses)

  // console.log(newDeuses)
  // var upDeuses = (deuses) => "Super" + deuses


  //###### meu entendimento sobre os metodos .map() e .forEach() ainda estao bem confusos, pois aparentemente eles fazem a mesma coisa
  // deuses.forEach(function (item, indice, array){

  //   alert(item)
  // })


  //################### aqui utilizei o metodo .map(), esse metodo faz escrever em cada elemento do array
  // var deusesMap = deuses.map(function(item, indice){
  //   return alert(item)
  // })

  //#################### aqui utilizei o metodo .push() isso fez adicionar 3 elementos ao array deuses. os 3 foram adicionados ao final.
  // deuses.push(["Loki", "Odin", "Freya"])


  //############# aqui criei uma confição com o if() para acrescentar 3 elementos no array deuses desde que o tamanho do array fosse 3
  // if (deuses.length >= 3) {
  //   deuses.push("Odin", "Freya", "Loki")
  //   alert(`O Array deuses agora tem ${deuses.length}`)
  //   alert(deuses)
  // }


  //######## Aqui criamos uma função de comparação pelo metodo .sort() em que comparamos o valor "a" com o valor "b" assim que não comparados são retornados.
  // var numerosCres = numeros.sort(function (a, b){
  //   return b - a
  // })

  // console.log(numerosCres)

  // alert(deuses)
}