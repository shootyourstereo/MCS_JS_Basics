	const money = prompt('Сколько у вас с cобой денег?');
	const apples = prompt('Сколько вы купили яблок?');
	const bread = prompt('Сколько вы купили батонов хлеба?');
	const apple = prompt('Сколько стоит одно яблоко?');
	const loaf = prompt('Сколько стоит один батон?');
	const allapples = parseInt(apple) * parseFloat(apples);
	const allbread = parseFloat(bread) * parseFloat(loaf);
	let result = parseFloat(money) >= allapples+allbread;
	let res = result.toString();
	document.getElementById("final").innerHTML = res;
	let back = document.body;
	if(result===true) {
		back.style.backgroundColor = 'green'
	}else {
		back.style.backgroundColor = 'red'; 
	}