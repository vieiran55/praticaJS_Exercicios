function desconto(){
  var preco = document.getElementById('preco').value
  var porcentagem = document.getElementById('porcentagem').value

  var precoFormatado = parseInt(preco)
  var porcentagemFormatada = parseInt(porcentagem)


  console.log(precoFormatado*((100-porcentagemFormatada)/100))
}