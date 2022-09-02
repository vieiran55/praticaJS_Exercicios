function bkVerde() {


  var data = new Date()

  var diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  var diaSemana = diasDaSemana[data.getDay()]
  var meses = ["Janeiro", "Fevereiro", "Março", "Abirl", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  var mes = meses[data.getMonth()]
  var dia = data.getUTCDate()
  var ano = data.getFullYear()



  alert(`Hojé é ${diaSemana}, ${dia} de ${mes} de ${ano}`)
  alert(`Mês que vem será ${meses[data.getMonth()+1]}`)

  addEventListener('click', () => {
    var background = document.getElementById("corpo");
    background.classList.remove("corpo")
    background.classList.remove("corpoBKVermelho")
    background.classList.add("corpoBKVerDe")

  })
}

function bkVermelho() {

  addEventListener('click', () => {
    var background = document.getElementById("corpo");
    background.classList.remove("corpo")
    background.classList.remove("corpoBKVerDe")
    background.classList.add("corpoBKVermelho")

  })
}

var resultado = document.getElementById('resultado')
function inserirJS() {
  resultado.innerHTML = " Inserido Via JS "


  for (let i = 1; i <= 20; i++) {
    resultado.innerHTML += `<br> ${i}x Repetição`
  }



  //   function repeticao(elemento){
  //     for (let i = 1; i <= 20; i++) {
  //       resultado.innerHTML += `<br> ${i}`+ elemento
  //     }
  // }

  // var arrResultado = [1, 2, 3, 4, 5]

  // function repetir(elemento){
  //   resultado.innerHTML = elemento + "x repeticao"
  //   resultado.innerHTML = elemento + "x repeticao"
  //   resultado.innerHTML = elemento + "x repeticao"
  //   resultado.innerHTML = elemento + "x repeticao"
  //   resultado.innerHTML = elemento + "x repeticao"
  // }
  //   arrResultado.forEach(repetir)
};


var tabuada = document.getElementById('tabuada')
function inserirWhile() {
  // var i = 0;
  // do {
  //   i ++
  //   resultado.innerHTML += `<br> ${i} x Repetição`
  // } while (i<5);

  for (let i = 1; i <= 10; i++){
    
    tabuada.innerHTML += `########### <br>`
    for (let x = 1; x <= 10; x++){
      tabuada.innerHTML += `${i} x ${x} = ${i * x}<br>`
    }
  }

}

function sorteio () {
  var nrchutado = document.getElementById('nrchutado').value
  var nrChutadoNr = parseInt(nrchutado)

  min = Math.ceil(1);
  max = Math.floor(10);
  var numerosExtenso = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"]
  var sorteado = Math.floor(Math.random() * (max - min) + min)
  console.log(sorteado)
  console.log(nrChutadoNr)


  if (nrChutadoNr === sorteado) {
    alert (`Parabeens! Acertou na mosca! Você escolheu o número ${numerosExtenso[sorteado-1]}`)
  } else {
    alert(`Não foi dessa vez. O numero sorteado foi ${numerosExtenso[sorteado-1]}.`)
  }



}


// window.onload = sorteio;