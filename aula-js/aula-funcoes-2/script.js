function saudacao() {
  return "ola mundo";
}

var s = saudacao();

console.log(s);

//////////////////////////////////

function saudacao() {
  return "ola mundo";
}

var s = saudacao; // se não colocar os parenteses o "S" vira uma função.

console.log(s());
console.log(saudacao());

/////////////////////////////////////////////////////////

function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media = (nota1 + nota2) / 2;

  return media;
}

var resultado = media(6, 7);
var m = media;

var resultado2 = m(2, 3);

console.log(resultado);
console.log(resultado2);

//////////////////////////////////////////////////////////////////////////////

function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;

  return (nota1 + nota2) / 2;
}

var m = media(9, 7);

console.log(m);

//////////////////////// versão simplificada da function acima //////////////////////////

var media = function (n1, n2) {
  return (n1 + n2) / 2;
};

console.log(media(5, 6));

///////////////////////  functions /////////////////////////

var mediaNota = (n1, n2) => {
  return (n1 + n2) / 2;
};

var media = mediaNota(8, 4);

console.log(media);
