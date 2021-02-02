/*
== igual a 
===  valor igual e igual  *geralmente usa-se esse
!= não é igual
!== não é igual ou não igual  *geralmente usa-se esse
> maior que
< menor que
>= maior ou igual que
<= menor ou igual que
*/

var a = "4";
var b = 4;

console.log(a == b); //aqui da true pq são igual em relação a ser valores
console.log(a === b);  // aquida false por que compara valor e tipo

console.log(a != b);  // mesma situação com a diferença que aqui ele invere por ser comparação de diferente como assim; por ser diferente ele inverte do comparativo onde era true para igual vai dar false para diferente.
console.log(a !== b);

var a = 5;
var b = "5";

console.log(a >= b);