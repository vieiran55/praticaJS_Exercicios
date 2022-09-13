 //funções contrutoras são equivalentes a classes no js
 //classes são conceitos, neste caso podem iniciar com letras maiusculas
 function User(nome, email){
   this.nome = nome
   this.email = email

   this.exibirInfos = function() {
      return `${this.nome}. ${this.email}`
   }
 }

 // User será o prototipo do objeto novoUser que será criado
 // As funções construtoras devem ser chamadas com o operador new
//  const novoUser = new User('Juliana', 'j@j.com')
//  console.log(novoUser.exibirInfos())

// function Admin(role) {
//    //aqui usamos this para chamar o User
//    User.call(this, 'Juliana', 'j@j.com')
//    this.role = role || 'estudante'
// }

// //passamos os prototipos da propropriedade User para Admin, estamos criando um objeto e passando a propriedade prototipo de user
// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
   init: function(nome, email){
      this.nome = nome
      this.email = email
   },
   exibirInfos: function(nome) {
      return this.nome
   }
}

// na vida real utilizamos mais Object.create
const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())

// console.log(user.isPrototypeOf(novoUser))