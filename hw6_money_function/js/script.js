	function haveEnough(money,apples,bread,apple,loaf){
		let back = document.body;
		money = prompt('Сколько у вас с cобой денег?');
		apples = prompt('Сколько вы купили яблок?');
		bread = prompt('Сколько вы купили батонов хлеба?');
		apple = prompt('Сколько стоит одно яблоко?');
		loaf = prompt('Сколько стоит один батон?');
		let allapples = parseInt(apple) * parseFloat(apples);
		let allbread = parseFloat(bread) * parseFloat(loaf);
		if (parseFloat(money) >= allapples + allbread){
			back.style.backgroundColor = 'turquoise'
			return 'Вам хватает денег на покупки';	
		}
		else {
			back.style.backgroundColor = 'tomato';
			return 'Вам не хватает денег на покупки';
		}
	}

	document.querySelector('h1').innerHTML = haveEnough();

