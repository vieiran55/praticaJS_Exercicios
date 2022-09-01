

function soma(){
  var n1 = document.getElementById('soma1').value
  var n2 = document.getElementById('soma2').value
  var resultado = document.getElementById('resultado')

  var n1Formatado = parseInt(n1)
  var n2Formatado = parseInt(n2)
 
  console.log(`${n1} e ${n2}`)
  var resultadoSoma = n1Formatado + n2Formatado

  console.log(`${resultadoSoma}`)
  document.getElementsByName('resultado-soma')[0].placeholder = `${resultadoSoma}`
}

// function inserirSomaJS() {
//   var resultado = document.getElementById('resultado')
//   var n1 = document.getElementById('soma1').value
//   var n2 = document.getElementById('soma2').value

//       var n1Formatado = parseInt(n1)
//       var n2Formatado = parseInt(n2)
  
//   var resultadoSomaJS = n1Formatado + n2Formatado
  
//   return  resultado.innerHTML = resultadoSomaJS
   
// }


function inserirSomaJS() {
  var resultado = document.getElementById('resultado')
  var n1 = document.getElementById('soma1').value
  var n2 = document.getElementById('soma2').value

      var n1Formatado = parseInt(n1)
      var n2Formatado = parseInt(n2)
  
  var resultadoSomaJS = n1Formatado + n2Formatado
  
  if (n1 === "" || n2 === "") {

    resultado.innerHTML = '0'
  } else {
    return  resultado.innerHTML = resultadoSomaJS
  }
   
}

function inserirMultJS() {
  var resultado = document.getElementById('resultado')
  var n1 = document.getElementById('soma1').value
  var n2 = document.getElementById('soma2').value

      var n1Formatado = parseInt(n1)
      var n2Formatado = parseInt(n2)
  
  var resultadoMultJS = n1Formatado * n2Formatado
  
  return  resultado.innerHTML = resultadoMultJS
   
}


