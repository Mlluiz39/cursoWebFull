 /* nomes de variaveis:
 //caixa
 //caixa2
 //_caixa
 //$caixa
 //caixaGrande
 por conveção a 1 letra com minuscula */
 
 
 
 
 
 // quando não foi inicializada vai dar underfined

var a; 

console.log(a);

//////////////////////////////////////////////////
//       inicializando 1 opção     //

var a = 'placa de captura';

console.log(a);

//////////////////////////////////////////////////
//       inicializando 2 opção     //

var a;

a = 'hd';

console.log(a);

///////////////////////////////////////////////////
// rescrevendo  uma variavel                                      //
var a;

a = 'ssd';

a = 'memory card';

console.log(a);

/////////////////////////////////////////////////
// recebendo outra variavel com outra variavel

var b = 'hd externo';

var b = a;

console.log(b);

var nome = 'Marcelo'
var idade = 41
var possuiFaculdade = true

console.log(nome, idade, possuiFaculdade)

var preco = 20
var totalComprado = 5
var totalPreco = totalComprado * preco

console.log(totalPreco)

var sobrenome = 'Luiz', 
    ultimoNome ='Pereira'

console.log(nome, sobrenome, ultimoNome)

var semDefinir;  // variavel undefined
console.log(semDefinir)