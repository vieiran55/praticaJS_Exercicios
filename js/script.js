const catarsy = {
  nome: 'Antonio',
  idade: '29',
  city: 'Brasilia - DF',
  nick: 'catarty',
  stack: 'JavaScript',
  developer: 'FrontEnd',
  instagram: 'al_vieirah',
  linkedin: 'antoniov55',
  github: 'vieiran55'
}

console.log(catarsy.nome)

// ####################### CPF FORMATADO EM PONTOS #############

document.getElementById("cpf").onblur = function () { cpfFormatado() };

function cpfFormatado() {

  var cpfMostrar = document.getElementById('cpf').value
  var cpfFormatado = cpfMostrar.substring(0, 3) + "." + cpfMostrar.substring(3, 6) + "." + cpfMostrar.substring(6, 9) + "-" + cpfMostrar.substring(9, 11)

  document.getElementsByName('cpfVazio')[0].placeholder = `${cpfFormatado}`
  // cpf.innerHTML = "opa"
}

// #####################################  CPF FORMATADO SEM PONTOS  #######

document.getElementById("cpf2").onblur = function () { cpfFormatado2() };

function cpfFormatado2() {
  var cpfMostrarSemPontos = document.getElementById('cpf2').value
  var cpfFormatadoOk = cpfMostrarSemPontos.replace(/-/g, "").replace(/\./g, "")

  document.getElementsByName('cpf2Vazio')[0].placeholder = `${cpfFormatadoOk}`
}
// ##################  LAMPADA ##############

function acende() {
  lampada.src = "acesa.jpg"
}

function apaga() {
  lampada.src = "apagada.jpg"
}

function turnOn() {
  lampada.src = "acesa.jpg"
}

function turnOf() {
  lampada.src = "apagada.jpg"
}

