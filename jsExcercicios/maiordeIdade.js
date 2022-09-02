function verificarAno(){
var anodenascimento = document.getElementById('data').value
var resultado = document.getElementById('resultado')

var ano = parseInt(anodenascimento)
var calcIdade = 2022 - ano

if (calcIdade >= 18) {
    resultado.innerHTML = "Você é maior de idade"
} else {
  resultado.innerHTML = "Você é menor de idade"
}
}