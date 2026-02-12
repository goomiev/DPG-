const botao = document.getElementById("butt");

botao.addEventListener("click", function () {
    alert("Boa mlk, catchau🌩️😎");
});

const botao2 = document.getElementById("butt2");

botao2.addEventListener("click", function(){
    alert("Pura teimosia☺️😏");
});



const botao3 = document.getElementById("toggleBtn")
const conteudo = document.getElementById("conteudo")

botao3.addEventListener("click", () => {
  console.log("CLIQUEI")
  conteudo.classList.toggle("fechado")
})

const botao4 = document.getElementById("toggleBtn2")
const conteudo2 = document.getElementById("conteudo2")

botao4.addEventListener("click", () => {
  console.log("CLIQUEI")
  conteudo2.classList.toggle("fechado")
})





