//MENU AMBURGUER
const botao = document.getElementById("menuHamburguer");
const menu = document.getElementById("nav-menu");
const link=document.querySelectorAll("nav-menu a");

botao.addEventListener("click", function () {
  menu.classList.toggle("active");
});

link.forEach(function(link){
    link.addEventListener("click", function(){
       
        menu.classList.remove("active");

    })
}); 
