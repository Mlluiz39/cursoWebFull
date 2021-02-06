var aluno = {
    nome: 'Marcelo',
    notas: [9, 7.8]   
}

console.log(aluno)

///// com metodos  ou seja com function dentro do objeto ////////

var aluno = {
    nome: 'Marcelo',
    notas: [9, 7.8], 

    media: function(n1, n2) {
        return (n1 + n2) / 2
    }
                           ////////////////// aqui tinha que ser atualizada nos dois locais  no objeto e na invocação     
}

console.log(aluno.nome)
console.log(aluno.media(5, 8))


///// ajuste da operação acima ///////

var aluno = {
    nome: 'Marcelo',
    notas: [5, 7.8], 

    media: function(n1, n2) {
        return (n1 + n2) / 2
    }
                 ///////////// aqui alteração apenas nas notas do objeto    
}


console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))


////////////////////// Aleração do metodo ///////////////////////////////
////////////// vamos supor que tenha que alterar o calculo da media /////////////////
////////////// teriamos que alterar em todos os alunos imagina em 100 alunos /////////////


var aluno1 = {
    nome: 'Julia',
    notas: [6, 8], 

    media: function(n1, n2, n3) {   //  <= exemplo aqui ///////
        return (n1 + n2 + n3) / 3
    }
       
}

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))


var aluno2 = {
    nome: 'Cilene',
    notas: [6, 8], 

    media: function(n1, n2) {   //  <= exemplo aqui ///////
        return (n1 + n2) / 2
    }
       
}

console.log(aluno2.nome)
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]))


/////////////// opção ////////////

var aluno1 = {
    nome: 'Julia',
    notas: [6, 8],

    media: function() {
        return (this.notas[0] + this.notas[1]) / 2
        
    }
}

var aluno2 = {
    nome: 'Cilene',
    notas: [9, 9], 

    media: function() {  
        return (this.notas[0] + this.notas[1]) / 2
    }
       
}

console.log(aluno1.nome)
console.log(aluno1.media())

console.log(aluno2.nome)
console.log(aluno2.media())

////////////// poŕem voltamos a verbosidade de antes //// vamos resolver abaixo ////////////



function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno1 = {
    nome: 'Julia',
    notas: [7, 7],

    media: calcMedia
}

var aluno2 = {
    nome: 'Cilene',
    notas: [8, 7],

    media: calcMedia
}

console.log(aluno1.nome)
console.log(aluno1.media())

console.log(aluno2.nome)
console.log(aluno2.media())

calcMedia()  // vai dar erro pois o js não reconhece o this
