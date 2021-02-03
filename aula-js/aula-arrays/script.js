var arr = new Array()

console.log(arr)


var alunos = ['Marcelo', 'Julia', 'Cilene', 'Leo']

console.log(alunos)
console.log(alunos.length)
console.log(alunos[2])


for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}

for (var aluno in alunos) {
    
    //console.log(alunos[aluno])  aqui mostra o elemento em si
    console.log(aluno)  // aqui mostra a posição do array o index
}

for (var aluno of alunos) {
    console.log(aluno)  // aqui mostra o elemento
}