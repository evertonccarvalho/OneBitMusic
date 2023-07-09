let list = document.querySelectorAll(".nav li");

function active() {
  list.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
  console.log("navbar clicado");
}

list.forEach((i) => i.addEventListener("click", active));

let menuToggle = document.querySelector(".menuToggle");

menuToggle.onclick = function () {
  header.classList.toggle("active");
  console.log("menuCLicado");
};

// Remover a classe "active" do header

let li = document.querySelectorAll(".nav li");
let header = document.querySelector("header");

function desativar() {
  header.classList.remove("active"); // Remover a classe "active" do header
  console.log("navbar clicado");
}

li.forEach((i) => i.addEventListener("click", desativar));
