function verificarIP(){
  var n1 = document.getElementById('numero1').value
  var resultado = document.getElementById('resultado')


  var resto = n1 % 2
  if (resto == 0 ) {
    console.log('Par')
    resultado.innerHTML = "Par"
  } else {
    console.log("Impar")
    resultado.innerHTML = "Impar"
  }
}
