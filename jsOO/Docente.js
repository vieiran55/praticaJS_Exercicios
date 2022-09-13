import User from "./User.js";

export default class Docente extends User {
   constructor (nome, email, nascimento, role = 'docente' , ativo = true){
      super(nome, email, nascimento, role, ativo)
   }

   aprovaEstudante(estudade, curso){
      return `O estudante ${estudade}, foi aprovado no curso de ${curso}`
   }
}

// const novoDocente = new Docente('Gabriela', 'g@g.com', '22-04-2000')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Antonio', 'ADS'))