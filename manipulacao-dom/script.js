const elementos = document.querySelectorAll(".texto")
// querySelectorAll pega todos os elementos
console.log(elementos);

// percorrendo a lista e pegando cada elemento p
elementos.forEach(elemento => console.log(elemento));

//percorre alista e pegando o texto (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

//Alterando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
})

elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>Item</h2>";
})

elementos.forEach(elemento => {
    elemento.style.color = "#0000FF";
})

//Eventos - são ações dos usuarios

//CLick
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {alert("Voce clicou")});

//digitação (input)

const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

campo.addEventListener("input", () => {
    //value -> o que esta sendo digitado dentro do campo
    resultado.innerText = campo.value;
})