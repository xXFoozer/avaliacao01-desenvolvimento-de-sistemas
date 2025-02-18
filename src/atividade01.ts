import leia from 'readline-sync'
export default function atividade01() {
  let nota = leia.questionInt("Digite a nota de 100,90,80,70...")
  
  
  
  if (nota === 100) {
    console.log("A");
  } else if (nota >= 90 && nota < 100) {
    console.log("A");
  } else if (nota >= 80 && nota <= 89) {
    console.log("B");
  } else if (nota >= 70 && nota <= 79) {
    console.log("C");
  } else if (nota >= 60 && nota <= 69) {
    console.log("D");
  } else if (nota >= 0 && nota < 60) {
    console.log("F");
  } else {
    console.log("Ops! Algo deu errado, tente novamente.");
  }

}