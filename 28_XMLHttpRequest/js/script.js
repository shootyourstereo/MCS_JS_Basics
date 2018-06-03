
const APIKey = 'dfaedf9a05aa4f228dd175432180306';
const form = document.forms[0];
const insert = document.querySelector('.temp');
let result = form.elements.city.value;
const url = 'http://api.apixu.com/v1/current.json?key=' + APIKey + '&q=' + result;
let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);

xhr.send();
console.log(url);

// if (xhr.status != 200){
// 	console.log(xhr.status + ' ' + xhr.statusText);
// }
// else {
	form.onsubmit = function(e) {
	e.preventDefault();
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	insert.innerHTML = DATA.current.temp_c;
}
// }
