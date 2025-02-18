import leia from 'readline-sync'
export default function atividade04() {  
    let numeroMagico = 0;
    let tentativa;

    numeroMagico = Math.trunc(Math.random() * 100);


    

    do{
        tentativa = leia.questionInt("DIGITE O SEU CHUTE: ")
        if(tentativa > numeroMagico){
          console.log(" é abaixo disso")
        } 

        if(tentativa < numeroMagico){
          console.log(" é acima disso")
        }


    }while(tentativa != numeroMagico)


}