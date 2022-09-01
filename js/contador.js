var n1Texto = document.getElementById("contador")
var n1 = document.getElementById("contador").text
var n1Number = parseInt(n1)



// ######### aqui fiz uma função por botao. toda vez que o botao for acionado sera adicionado 1 a contagem pelo metodo for
function contar(){
  
  for (var i = 1; i <= 1; i++){

      console.log(n1Number ++)
      n1Texto.innerHTML ++
  }
}
// ####### aqui criei uma função para zerar o contador, quando o botao for acionado o contador vai direto para 1
function zerar(){

  n1Texto.innerHTML = (n1Number -= n1Number)
}

// ## aqui peguei ajudar na internet para finaliar o raciocinio logico. utilizando o metod if sempre que n1number for maior que 0 o mesmo sera decrescido em 1. dentro existe outro if dizendo que quando n1Number chegar em 0 ele passara a ser 0, pois se isso nao for feito ele nunca vai parar o loop.


function regressiva(){
  // n1Texto.innerHTML = n1Texto.innerHTML-1
  if (n1Number > 0 ) {
    n1Number -= 1;
    if (n1Number == 0 ){
      n1Number = 0;
    }
    n1Texto.innerText = n1Number;
    setTimeout(regressiva, 500)
  }

}