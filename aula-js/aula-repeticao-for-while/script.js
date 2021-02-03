//////////////////////////////For/////////////////////////////////////////

var numeros = 5

for(var vez = 0; vez < numeros; vez++){
    console.log('executando o for por ' + vez + ' vez')
}

console.log('fim do programa')


var n = 10

for (var i = 0; i < n; i++){
    console.log('executando o laço por ' + i + ' vezes')
}

console.log('fim do algoritimo')

////////////////////////////////////While///////////////////////////////////////

var numero = 0

while (numero <= 10){

    console.log('numero ' + numero)
    numero++  // nunca esquecer de incrementar
}

console.log('acabou o programa')



var number = Math.random() * 100



while (number < 90) {

    console.log(number)
    number = Math.random() * 100
    
}

console.log(number.toFixed(2))  // aqui coloquei para aparecer apenas duas casas decimais
console.log('fim do algoritimo')