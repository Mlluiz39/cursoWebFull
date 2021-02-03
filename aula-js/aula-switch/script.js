var nota3 = 6.0
var nota4 = 9.0

var media = (nota3 + nota4) / 2

conceito = 0

if(media >= 9){
    conceito = 'otimo'
}

else if(media >= 7.5){
    conceito = 'bom'
}

else if(media >= 6) {
    conceito = 'regular'

} else {
    conceito = 'pessimo'
}

conceito = 'horrivel'  // forçando o valor default

console.log(media)
console.log(conceito)

switch(conceito){

    case 'otimo':
        console.log('parabéns')
        break

    case 'bom':
        console.log('você está bem')
        break

    case 'regular':
        console.log('estude mais')
        break

    case 'pessimo':
        console.log('você foi muito ruim tem que estudar mais e mais')
        break

    default:
        console.log('error nota não encontrada ?')
}