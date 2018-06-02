// Ваша задача
// 1. ﻿Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex
// 2. ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’
// 3. ﻿По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0
// 4. ﻿По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’

window.addEventListener('load', function(){

const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

button.onclick = () => {
	popup.style.display = 'flex';
}

closePopup.onclick = () => {
	popup.style.display = 'none';
}

openMenu.onclick = () => {
	menu.style.left = '0';
	menu.style.opacity = 1;
}

closeMenu.onclick = () => {
	menu.style.left = '-50vw';
	menu.style.opacity = 0;
}

})


