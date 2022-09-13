import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User ('Mariana', 'm@m', '2021-01-01')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin ('Rodrigo', 'r@r', '2021-01-01')
// //aqui nao chamamos .nome  entre (), chamamos como uma propriedade.
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.nome)
// polimorfismo é a possibilidade dessas subclasses usarem um método

const novoDocente = new Docente ('Guilherme', 'g@g.com', '2021-01-01')
console.log(novoDocente.exibirInfos())