window.onload = () => {

const Name = document.querySelector('.personName');
const Icon = document.querySelector('.icon');

class Person {
	constructor(name){
		this.name = name;
		this.happiness = 0;
	}
	hasCat(){
		return this.happiness++;
	}
	hasRest(){
		return this.happiness++;
	}
	hasMoney(){
		return this.happiness++;
	}
	isSunny(){
		const APIKey = 'dfaedf9a05aa4f228dd175432180306';
		const url = 'http://api.apixu.com/v1/current.json?key=' + APIKey + '&q=' + 'Moscow';
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);
		let temp = DATA.current.temp_c;
		if (temp > 15) {
			this.happiness++;
		}
		else {
			return this.happiness;
		}
	}
}	

const form = document.forms[0];
form.onsubmit = function(e) {
	e.preventDefault();
	const name = form.elements.name.value;
	const cat = form.elements.cat.value;
	const rest = form.elements.rest.value;
	const money = form.elements.money.value;

const NewPerson = new Person(name);

if (cat === 'yes') {
	NewPerson.hasCat();
}
if (rest === 'yes') {
	NewPerson.hasRest()
}
if (money === 'yes') {
	NewPerson.hasMoney()
}
NewPerson.isSunny();
Name.innerHTML = name;

if(NewPerson.happiness == 4) {
	Icon.innerHTML = '😆';
}

else if (NewPerson.happiness == 3|| NewPerson.happiness == 2) {
	Icon.innerHTML = '😐';
}
else {
	Icon.innerHTML = '☹️';
}
}
}
