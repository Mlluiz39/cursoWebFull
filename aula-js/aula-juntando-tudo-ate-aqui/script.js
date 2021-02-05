/*  Exercicio 

Faça um programa com uma lista de nomes dos alunos com as suas notas e media e informar se foi aprovado ou reprovado.

*/

var nomes = ["Marcelo", "Cilene", "Juuh"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function calculaMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function aprovadoOuNao(calculaMedia) {
  if (calculaMedia >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

for (var nome in nomes) {
  var nota1 = notasA[nome];
  var nota2 = notasB[nome];

  var m = calculaMedia(nota1, nota2);

  console.log(
    nomes[nome] +
      " = 1º nota é " +
      nota1 +
      " e a 2º nota é " +
      nota2 +
      " com média " +
      m +
      " = " +
      aprovadoOuNao(m)
  );
}
