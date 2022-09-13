// aqui importamos o User de aquivo 
import User from "./User.js";

// vamos criar a class Admin importando de User, para isso é necessário utilizar o termo extends
export default class Admin extends User {
   constructor (nome, email, nascimento, role = 'admin', ativo = true) {
      // nao precisamos copiar tudo que está em user, podemos apenas utilizar o "super()" que é uma propriedade de class
      // super class é a class que está fornecendo os metodos, HERANçA
      // nao é obrgatori trazer todos os parametros, mas neste caso vamos pq estamos trabalhando com elas
      super(nome, email, nascimento, role, ativo)
   }

   // aqui criamos um novo curso
   criarCurso(nomeDoCruso, vagas) {
      return `Curso de ${nomeDoCruso} criado com ${vagas} vagas`
   }
}

// // aqui criamos o novo admin 
// const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '2021-01-01')

// // verificamos o novo admin crindo um novo curso
// console.log(novoAdmin.criarCurso('JS', 20))