// a Variavel declarada com var tem escope global

var str = "template String";

console.log(str);


var str2 = 'valor qualquer 2';

console.log(str2);


var str3 = "valor qualquer '3'";

console.log(str3);


var str4 = 'valor qualquer "4"';

console.log(str4);


var strNumber = '88';

console.log(strNumber);


var strConcat2 = 'qualquer texto ' + 'com outro texto';

console.log(strConcat2);


var strConcat = 'valor qualquer ';
strConcat += 'de mais de um numero';

console.log(strConcat);


var TemplateString = `qualquer texto com
 ${str} 
 outro texto parte 2`;  // aqui é possivel ter quebras de linhas sem problemas.

console.log(TemplateString);


var TemplateString2 = `qualquer texto com 
${strNumber * 2} outros texto`;

console.log(TemplateString2);

