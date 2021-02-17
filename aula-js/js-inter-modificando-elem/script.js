let p = document.getElementById("p1")
let para = document.getElementById("paragrafo")

p.innerHTML = "Novo conteudo"

p.innerText = "Conteudo mais novo"

p.textContent = "Mais novo ainda"

/*Exemplos*/

p.textContent = "<h2>tem um h1 dentro do p</h2>"  // aqui coloca um texto 

p.innerText = "<h2>tem um h2 dentro do p</h2>"  // aqui tambem coloca um texto 

p.innerHTML = "<h2>tem um h3 dentro do p</h2>"  // aqui coloca um html

p.className = ""  // aqui a clasee foi modificada

p.innerText
console.log(p)  //porem diferente do text content ele mostra o que está na tela

p.textContent
console.log(p)  //aqui mostra tudo que é texto que está no html mesmo estando como display none

para.className = ""  // aqui altera a classe

p.setAttribute("meuAtt", "outro atributo")
console.log(p)  // altera o atributo

