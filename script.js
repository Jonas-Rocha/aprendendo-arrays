/*
Array

Array é uma coleção ordenada de valores.

Podemos comparar um array a uma lista, onde cada item da
lista possui uma posição específica, conhecida como índice.
*/

/*
Exemplo

Pense em uma caixa de correio com vários compartimentos numerados.
Cada compartimento é como uma posição no array, e dentro de cada
compartimento, você pode armazenar algo, como uma carta.

Os compartimentos são numerados de forma ordenada, começando do 0
e indo até o número total de compartimentos menos um.
*/

// Criando Array com construtor.

const newArray = new Array();
// Mostando que tudo no JS é um objeto, até mesmo um array
//console.log(typeof newArray);
console.log(newArray);
console.log("Jonas".length); //O "length" não é um método, é apenas uma propriedade de string que pode ser utilizada.
console.log(newArray.length); //Como os Arrays são considerados uma caideia de caracteres, a propriedade length pode ser utilizada nele.

// [] - Array
// {} - Object

// Cria o array com 10 posições vazias.
const avaliable = new Array(10);
console.log(avaliable);
console.log(avaliable.length);
