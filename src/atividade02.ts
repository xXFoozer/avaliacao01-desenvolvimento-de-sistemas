import leia from 'readline-sync'

export default function atividade02() {
  let idade = leia.questionInt("Digite sua idade: ")

  if(idade <= 12){
    console.log("Criança")
  }else if(idade > 12 && idade <= 17){
    console.log("Adolecente")
  }else if(idade > 17 && idade <= 59){
    console.log("Adulto")
  }else{
    console.log("idoso")
  }

}