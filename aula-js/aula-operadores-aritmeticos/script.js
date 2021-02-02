/*
+ Adição
- Subtração
* Multiplicação
/ Divisão
% Módulo  pega o resto da divisão caso o valor não de certo pega o valor inicial e sobra ele; como assim no caso abaixo 10 não pode ser dividido por 15 então sobra os 10
++ Incremento
-- Decremento
*/

var a = 10;
var b = 15;
var c = a + b;

console.log(c);

var d = a % b;

console.log(d);

var incremento = 30;

incremento = incremento + 1;
incremento++;

var decremento = 30;
decremento--;

console.log(incremento);
console.log(decremento);

/*
diferenças na hora de incrementar e decrementar
com o sinal na frente o js primeiro faz a operação depois atribui.
com o sinal depois ele atribui depois faz a operação.


*/

