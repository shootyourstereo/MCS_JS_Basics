const form = document.forms[0];
const insert = document.querySelector('.total');


form.onsubmit = function(e) {
	e.preventDefault();
	let result = (Math.PI * form.elements.angle.value) / 180
	insert.innerHTML = Math.sin(result);
}