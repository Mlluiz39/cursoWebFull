// ///////////// 1 forma //////////////////

function mediaNota(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media = (nota1 + nota2) / 2;
  console.log("sua nota é " + media);
}

mediaNota(8, 5);
mediaNota(5, 4); // aqui já conseguimos fazer a media de mais de um aluno sem ter que repitir codigos.

// /////////////// 2 forma ////////////////

function mediaNota2(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media2 = (nota1 + nota2) / 2;

  return media2;
}

var resultado = mediaNota2(6, 7);
var resultado1 = mediaNota2(8, 7);

console.log(resultado + " e " + resultado1);

function mediaNota2(n1, n2) {
  var media2 = (n1 + n2) / 2;

  return media2;
}

var resultado = mediaNota2(7, 7);

console.log("Sua nota é " + resultado);
