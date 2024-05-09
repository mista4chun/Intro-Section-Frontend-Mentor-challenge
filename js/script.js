const dropdown = document.querySelector('#dropdownBtn');
const dropdownItems = document.querySelector('#dropdownItems');
const downBtn = document.querySelector('#drpdwnBtn');
const dropItems = document.querySelector('#drpdwnItems');
const dpdownBtn = document.querySelector('#dpdownBtn')
const dpdownItems = document.querySelector('#dpdownItems')
const drpdnBtn = document.querySelector('#drpdnBtn')
const drpdnItems = document.querySelector('#drpdnItems')
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

dropdown.addEventListener('click', toggleDropdown);

function toggleDropdown() {
  dropdownItems.classList.toggle('hidden');
}

downBtn.addEventListener('click', toggleDrpdwn);

function toggleDrpdwn() {
  dropItems.classList.toggle('hidden');
}

dpdownBtn.addEventListener('click', toggleDpdown)

function toggleDpdown() {
  dpdownItems.classList.toggle('hidden')
}
drpdnBtn.addEventListener('click', toggleDpdn)

function toggleDpdn() {
  drpdnItems.classList.toggle('hidden')
}
btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

 
}