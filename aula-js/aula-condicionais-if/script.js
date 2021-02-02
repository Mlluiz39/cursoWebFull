var idade = 18;

if (idade >= 18)
    // com apenas uma linha de codigo não é necessario bloco de comando
    console.log("pode comprar a bebida!");
else console.log("não pode comprar a bebida!");





var idade2 = 17;

if (idade2 >= 18) {
    console.log("pode qual seu pedido!");
    console.log("Qual seu pedido?");
} else {
    console.log("Não pode!");
    console.log("Volte quando tiver maioridade!");
}  //quando tem mais de uma linha de codigo será necessario incluir bloco de comando.





var idade3 = 36

if(idade3 >= 35){
    console.log("pode!")
    console.log("qual seu pedido!")
}
else if(idade3 >= 18){
    console.log("pode!")
    console.log("porém mostre a identidade!")
} else {
    console.log("não pode!")
    console.log("Volte quando tiver maioridade!")
}




var idade4 = 65

if(idade4 >= 18 && idade4 <= 65){
    console.log("pode!")
    console.log("qual seu pedido?")
} else {
    console.log("Não pode!")
    console.log("você não tem a idade necessaria!")
}




var idade4 = 17

if(idade4 >= 18 || idade4 >= 65){
    console.log("pode!")
    console.log("qual seu pedido?")
} else {
    console.log("Não pode!")
    console.log("você não tem a idade necessaria!")
}

