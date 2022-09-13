const gato1 = {
   nome: "Churrumina",
   nascimento: "25/11/2018",
   pelagem: "mesclada",
   status: {
      castrada: true,
      vacinada: true,
      vermifugada: true
   },
   miar: function(){
      console.log("miau")
   }
}

console.log(gato1.miar())

function dobra(vetor, morte){
   
   return vetor.map((item) => item * 2);
   }

   console.log(dobra(2))