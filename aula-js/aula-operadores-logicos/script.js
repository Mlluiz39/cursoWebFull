/*

&& e
|| ou
Negativo
 
*/

 var a = true;
 var b = false;

 var c = a && b;

 console.log(c);

 //Exemplos com && e para a condição ser true as duas condições tem que ser true caso qualquer uma das duas seja false vai dar false.

 var idade = 35;  // caso a idade seja igual a 20 ou 30 ele vai dar false pois tem que ser maior ou igual menor ou igual.

 var maior20 = idade > 20;  
 var menor30 = idade < 30;

 var entre = maior20 && menor30;

 console.log("Idade", idade);

  console.log("Maior que 20", maior20);

  console.log("Menor que 30", menor30);

  console.log("Entre 20 e 30", entre);

  //Exemplo com  || "or" (ou)  nele alguma das condições tem que ser true para ser valido, ou se os dois forem false para dar false

 var idade = 10;

 var maior65 = idade >= 65;  
 var menor10 = idade <= 10;

 var gratuidade = maior65 || menor10;

 console.log("Idade", idade);

  console.log("Maior que 65", maior20);

  console.log("Menor que 10", menor30);

  console.log("Tem direito a gratuidade", gratuidade);



