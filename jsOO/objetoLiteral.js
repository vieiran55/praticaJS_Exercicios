// Aqui declaramos um objeto como padrão
const user = {
   nome: "Juliana",
   email: "j@j.com",
   nascimento: "2021/01/01",
   role: "admin",
   ativo: true,
   exibirInfos: function(){
      //utilizamos a propriedade this para os objetos
      // this nada mais é que dizer a "isso" que eu qero.
      console.log(this.nome, this.email)
   }
}

const admin = {
   nome: "Mariana",
   email: "m@m.com",
   role: "admin",
   criarCurso(){
      console.log('curso criado!')
   }
}

// utilizamos a propriedade Object.setPrototypeOf para utilizar uma função em outros locais, para nao precisar repetir
// atraves desses prototipos que criamos os processos de heranças
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//executamos a função que está dentro do objeto
//user.exibirInfos() 
// const exibir = user.exibirInfos
// exibir()
// quando utilizamos uma variavel para guardar uma função, é assim qe o javaScript entende.
//const exibir = function() {
//   console.log(this.nome)
//}

//usamos bind junto com this para prender this "isso" a determinado contexto
// const exibirNome = exibir.bind(user)
// exibirNome()
// exibir()

// function exibeInfos() {
//    console.log(this.nome, this.email)
//   }
   