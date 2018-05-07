const colored = document.querySelector('body');
const color = prompt('Какой будет фон у страницы?');
colored.style.backgroundColor = color; 

const font = document.querySelector('.page');
const fontColor = prompt('Какой будет цвет текста на странице?');
font.style.color = fontColor; 

const person = document.querySelector('.name');
const name = prompt('Как зовут человека, который вас вдохновляет?');
person.innerHTML = name;

const image = document.querySelector('img');
const url = prompt('Введите адрес картинки');
image.setAttribute('src', url);

const text = document.querySelector('.shortBio');
const write = prompt('Введите текст страницы');
text.innerHTML = write;

const animation = document.querySelector('.shortBio');
animation.className += ' animated';
