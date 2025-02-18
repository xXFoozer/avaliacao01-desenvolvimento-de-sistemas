import leia from 'readline-sync'

export default function atividade03() {
// 1- Pedra  
// 2- Papel  
// 3- Tesoura  

let escolha = leia.keyInSelect(['1- pedra','2- papel','3- tesoura'])+1
  switch(escolha){
      case 1:
          let sorteio = Math.trunc(Math.random() * 3);
          if(sorteio == escolha){
            console.log("empate")
          }else{
            console.log("you WIN")
          }
          break;
        case 2:
          let sorteio2 = Math.trunc(Math.random() * 3);
          if(sorteio2 == escolha){
            console.log("empate")
           }else{
            console.log("you WIN")
          }
         break;
        case 3:
          let sorteio3 = Math.trunc(Math.random() * 3);
          if(sorteio3 == escolha){
            console.log("empate")
           }else{
            console.log("you WIN")
          }
        break;
        default:
          return;
        
  }

}