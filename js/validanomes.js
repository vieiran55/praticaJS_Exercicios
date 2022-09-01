//############ VARIAVEIS ##########

var textoDigitado = document.getElementById('nome')
var lampada = document.getElementById('lampada')





function exibir() {
  var nomeDigitado = textoDigitado.value
  var tamanhoDoNome = nomeDigitado.length
  return alert(`O nome digitado foi ${nomeDigitado} que possui ${tamanhoDoNome} caracteres.`)
}

var nome1 = document.getElementById('nome1')
var nome2 = document.getElementById('nome2')


function exibirSlv(){
  alert(`Olá ${nome1.value} ${nome2.value}`)
}

function verificarPalavra(){
  var palavraVerificada = document.getElementById('palavra').value

  if (palavraVerificada.includes('LOL') == true || palavraVerificada.includes('lol') == true) {
    alert('LOL é muito melhor, NTC')
  }

}