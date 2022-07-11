const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let nav-list = document.querySelector('.nav-list');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav-list.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  nav-list.classList.remove('active');
}
