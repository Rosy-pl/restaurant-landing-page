// =========================
// MENU HAMBÚRGUER
// =========================

// Pega o botão do menu hambúrguer
const botao = document.getElementById("menuHamburguer");

// Pega o menu de navegação
const menu = document.getElementById("nav-menu");

// Pega todos os links que estão dentro do menu
const links = document.querySelectorAll("#nav-menu a");

// Pega o header da página
const header = document.querySelector("header");


// =========================
// ABRIR E FECHAR MENU
// =========================

// Quando clicar no botão hambúrguer,
// adiciona ou remove a classe "active" no menu
botao.addEventListener("click", function () {
  menu.classList.toggle("active");
});


// =========================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================

// Percorre todos os links do menu
links.forEach(function (link) {
  // Adiciona evento de clique em cada link
  link.addEventListener("click", function () {
    // Quando clicar em um link, o menu fecha
    menu.classList.remove("active");
  });
});


// =========================
// EFEITO NO HEADER AO ROLAR A PÁGINA
// =========================

// Quando o usuário rolar a página
window.addEventListener("scroll", function () {
  // Se rolou mais de 50px
  if (window.scrollY > 50) {
    // Adiciona a classe "active" no header
    header.classList.add("active");
  } else {
    // Se não, remove a classe "active"
    header.classList.remove("active");
  }
});


//BOTÃO FALAR NO WHATSAPP

    //numero de whatsapp com 55 + DD

    const numero= "5581992133306";

const whatsapp=document.getElementById("whatsApp");



whatsapp.addEventListener("click" , function(){



    //a mensagem que vai aparecer ao clicar no botao

    const mensagem="Olá, gostaria de falar com o restaurante!";

    //formata a mensagem

    const mensagemFormatada= encodeURIComponent(mensagem);

    //criar link do whatsapp
    const link= `http://wa.me/${numero}?text=${mensagemFormatada}`;

    //abre whatsapp em outra aba
     
    window.open(link,"_blank");



});

//botao reserva

const reserva=document.getElementById("reserva");

reserva.addEventListener("click", function(){
   
    const mensagem="Ola gostaria de fazer uma reserva";

    const mensagemFormatada= encodeURIComponent(mensagem);

    const link=`http://wa.me/${numero}?text=${mensagemFormatada}`;

    window.open(link,"_blank");

});