class customer {
	constructor(name, buy){
		this.name = name;
	}
	buy(){
			console.log('Куплено')
		}
}
class childCustomer extends customer {
	getPresent(){
		console.log('Шарик в подарок')
	}
}

const Man = new customer ('Олег Петрович');
console.log(Man)
console.log(Man.buy())


const Kid = new childCustomer ('Лиза');
console.log(Kid)
console.log(Kid.getPresent())
