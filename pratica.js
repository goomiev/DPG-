const botao = document.getElementById("but");
const conteudo = document.getElementById("texto");

botao.addEventListener("click", () => {
    conteudo.classList.toggle("roxo");
});

const botao2 = document.getElementById("but2");

botao2.addEventListener("click" , () => {
    conteudo.classList.toggle("verde");
})

const botao3 = document.getElementById("but3");

botao3.addEventListener("click" , () => {
    conteudo.classList.toggle("azul");
})