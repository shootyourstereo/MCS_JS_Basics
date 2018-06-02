console.log('You are at '+window.location);


function number (num){
	num = num**Math.floor(Math.random()*(10-1))+1;
	return Math.abs(num)
}


console.log(number(prompt('Введите число')))