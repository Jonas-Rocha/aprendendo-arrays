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

// Quantidade de itens do array
console.log(avaliable.length);

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Acessa o item pelo índice.
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);

// Tenta acessar um indice que não existe.
console.log(fruits[7]);

// Obtém dinamicamente o último item.
console.log(fruits[fruits.length - 1]);

let fullName = "Jonas Rocha de Souza";
console.log(fullName);

// Cria um Array com os nomes separando pelo espaço.
console.log(fullName.split(" "));

// Cria um Array com as letras
console.log(Array.from(fullName));
