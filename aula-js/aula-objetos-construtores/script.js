
var calcMedia = function() {
    return (this.nota1 + this.nota2) / 2
}

var turma = [
    {
        nome: 'Marcelo',
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: 'Juuh',
        nota1: 5,
        nota2: 8,
        media: calcMedia
    },
    {
        nome: 'Cilene',
        nota1: 7,
        nota2: 9,
        media: calcMedia
    }
]

var alunos = turma[2]

console.log(alunos)
console.log(alunos.media())


//////////////////// construtor /////////////////

function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno('Marcelo', 9, 9),
    criarAluno('Juuh', 8, 7.5),
    criarAluno('Cilene', 9, 9)
]

var alunos = turma[1]

console.log(alunos)
console.log(alunos.media())

turma.forEach(element => {
    console.log(element)
    
});

for (var aluno1 of turma) {
    console.log(aluno1.nome + ' = ' + ' sua média é ' + aluno1.media())
    console.log(`${aluno1.nome} =>  sua média é ${aluno1.media()}`)   
}


function aluno(nome, n1, n2) {

    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new aluno('Marcelo', 7, 8)
var b = new aluno('Cilene', 9, 9)

console.log(a)
console.log(a.media())
console.log(b)
console.log(b.media())