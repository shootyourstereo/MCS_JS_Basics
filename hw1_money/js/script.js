	let money = prompt('Сколько у вас с cобой денег?');
	let apples = prompt('Сколько вы купили яблок?');
	let bread = prompt('Сколько вы купили батонов хлеба?');
	let apple = prompt('Сколько стоит одно яблоко?');
	let loaf = prompt('Сколько стоит один батон?');
	let allapples = parseInt(apple) * parseFloat(apples);
	let allbread = parseFloat(bread) * parseFloat(loaf);
	let result = parseFloat(money) >= allapples+allbread;
	let res = result.toString();
	document.getElementById("final").innerHTML = res;