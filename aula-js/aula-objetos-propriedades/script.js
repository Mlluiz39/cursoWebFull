var aluno = {
    nome: "Marcelo", 
    nota1: 7.5    //quando a variavel está dentro do objeto passa a se chamar propriedade
}

console.log(aluno.nome)
console.log(aluno.nota1)
console.log(aluno)

console.log(aluno['nome'])
console.log(aluno['nota1'])

/////////////////// exemplo 2 /////////////////////


var aluno1 = {
    nome: 'Julia',
    notas: [7.5, 8.3]  // com mais de uma nota e vendo o index
}

console.log(aluno1['nome'])
console.log(aluno1.notas[0])
console.log(aluno1)


////3 exemplo ///////////////////////////////////

aluno.matricula = 123456  // adcionou a matricula ao aluno Marcelo

aluno1.matricula = 123456

console.log(aluno1.matricula)

var aluno2 = {
    nome: 'Jucilene',
    sobrenome1: 'Francisco'
}

aluno2['sobrenome2'] = 'De Souza'

console.log(aluno3)

////////////////////// aqui consigo alterar a prop //////////

var nomeNovaProp = 'Sobrenome de Solteira'  // atribuindo uma variavel consigo aletrar

aluno2[nomeNovaProp] = 'Francisco'

console.log(aluno3)
