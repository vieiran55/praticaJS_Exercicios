// aqui vamos criar a class, iniciando com letra maiúscula, ela é inciada com {}
// para declarar o export é necessário criar um arquivo packtjson, com npm init -y e adicionar ao arquivo   "type": "module"
// export faz parte do açucar sintatico do ESM6
export default class User {
   // para declarar uma classe como privada precisamos declara-la com # antes do constructor
   // aqui criamos a propriedas constructor e passamos os paramentros entre ()
   #nome 
   #email
   #nascimento 
   #role 
   #ativo
   constructor (nome, email, nascimento, role , ativo = true) {
      this.#nome = nome
      this.#email = email
      this.#nascimento = nascimento
      this.#role = role || 'estudante'
      this.#ativo = ativo
   }

   // aqui vamos criar um getter, deve ser criado aqui em User.js pois é daqui que está saindo todas as informações para contrução de usuarios
   // getter servem para fazer encapsulamento da classe e pegar um dado
   // encapsular serve pra esconder paramentros e metodos para nao serem alterados por fora da classe
   // get não aceita nenhum parametro

   get nome(){
      return this.#nome
   }
   get email(){
      return this.#email
   }
   get nascimento(){
      return this.#nascimento
   }
   get role(){
      return this.#role
   }
   get ativo(){
      return this.#ativo
   }

   // setter, utilizados para alterar propriedades privadas
   set nome(novoNome){
      if (novoNome === ''){
         throw new Error('formato não valido')
      }
      this.#nome= novoNome
   }
   

   // // criamos um objeto dentro da classe para ter acesso a mesma e fazer alterações
   // #montaObjUser(){
   //    return ({
   //       nome: this.#nome,
   //       email: this.#email,
   //       nascimento: this.#nascimento,
   //       role: this.#role,
   //       ativo: this.#ativo
   //    })
   // }

//aqui nao precisamos definir uma function, podemos passar diretamente a mesma.
   exibirInfos(){
      // agora criamos um método privado para acessar os items e fazer as alterações
      //const objUser = this.#montaObjUser()
      // refatoramos, ao invés de utilizar o this, usamos a variavel objUser, pq e a mesma recebe a função #montaObjUser
      return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
   }
}

// // aqui criamos um nomvo usuario, lembrando de passar o "new" antes do User, nao precisamos passar a role, pois ela ja esta passando estudade, e o modo ativo como true
// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')

// console.log(novoUser)
// console.log(novoUser.exibirInfos())
