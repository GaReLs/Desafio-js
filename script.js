//Funções inativas

// Função Map()
//percorre uma lista e cria uma nova lista com base na condição

// let numeros1 = [1,2,3,4];

// let numerosdobrados = numeros1.map(function(nun){
//     return nun * 2;
// })

// console.log(numerosdobrados);

// //ou assim
// //Arrow function com retorno implicito


// let numeros_dobrados_arrow = numeros1.map(num => num * 2)

// //quando eu preciso usar o return? quando a função precisa ter mais de uma linha
// //A setinha resume o function

// let resultado = numeros1.map(num =>{
//     num *= 2;
//     return num;
// })
// console.log(resultado);

// Filter
//Filtra elementos com base em uma condição

// let numeros = [5, 10, 15, 20]

// let m10 = numeros.filter(num => num > 10);
// // console.log(m10);

//Reduce
// Reduz os valores de um array para um unico valor
// let numeros = [1,2,3,4];

//O acumulador inicia em 0
//variavel auxiliar é o num

// let soma = numeros.reduce((acumulador,auxiliar) => acumulador + auxiliar, 0);

//FIND
// Retorna o primeiro elemento que atende a condição

// let produtos = [
//     {id:1, nome:"teclado", preco:50}, 
//     {id:2, nome:"mouse", preco:30}
// ];

// let item = produtos.find(produtos => produtos.id == 2);

// console.log(item);

// Split
// Divide a string em partes, tansformando em um array

// let frase = "JS é top"

// let palavras = frase.split(" ");
// console.log(palavras);

//Trim
//Trim remove espaços do começo e do final de uma string

//includes
//Retorna se existe um valor dentro de uma lista e retorna true ou falso

//toLowerCase _ tudo minusculo
//toUpperCase - tudo maiusculo

//Foreach
// let nome = ["João", "Willian", "Gabriel"];

// nome.forEach(nome => console.log(`Seu nome é ${nome}`))

//Some
//Verifica se pelo menos um item atende a condição / retorna true ou false

// let temPar = numero.some(num => num % 2 == 0);
// console.log(temPar);

//Evevy
//Verifica se todos os elementos atigem a condição / retorna true ou false (Mesma coisa do some mas ele analisa todos os elementos

// numero.sort((a, b) => a - b);

//Reverse
//Inverte a ordem dos elementos dentro do arry

//join
//junta os elementos de um array em uma string
// let palavras = ["Voce", "é", "Viado"];

// let frase = palavras.join(" ")
//"Voce é viado (resposta do console) "

//PUSH - adiciona elementos no final do array
//POP - Ele remove o ultimo elemento do final da lista
//Shift - Ele remove o primeiro elemento do final da lista
//Unshift - adiciona elementos no começo do array

//Slice copia uma parte da lista
//let parte = numero.slice(1,3); // são as posições (1,3) (ele copia entre essas posições por exemplo: nesse caso ele vai copiar 3 e 5)let numero = [1, 3, 5, 8];

//SPLICE

//Remove elementos numero.splice(1,1); apaga o numero 3
// let frutas = [ "Banana" , "manga", "pessego"]
//frutas.splice(0,2, "melancia", "melao"); adiciona melancia e melão e apaga banana e manga
//frutas.splice(2,0, "melancia", "melao"); adiciona melancia e melão na segunda posição e não apaga nada

//Replace - Substitui uma parte da string
// texto = ola munda
//texto.replace("mundo", "Usuario"); troca mundo por Usuario

//Prompt - recebe/solicita informações do usuario

// let nome = prompt("digite seu nome")
// console.log(nome);

//ParseInt() converte para int
//ParseFloat() converte para float
//Number() - converte para int de forma generica

// O que veremos nas proximas aulas

// const texto = document.getElementById("texto")

// let comprimento = prompt("Digite seu comprimento");
// comprimento = comprimento.toLowerCase();
// comprimento == "bom dia"? texto.textContent = comprimento : texto.textContent = "Segundou";

    

