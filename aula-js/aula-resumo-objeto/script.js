
////////////////////1 forma ///////////////////
var b = {nome: 'Marcelo', sobrenome: 'Souza'}

console.log(b)



function obj(n, s) {

    return { nome: n, sobrenome: s }

}

var a = obj('Marcelo', 'Souza')

console.log(a)

////////////////////// 2 forma /////////////////

function obj2(n1, s2) {

    this.nome = n1
    this.sobrenome = s2

}

var c = new obj2('Cilene', 'Souza')

console.log(c['nome'])
console.log(c.sobrenome)