console.log('You are at '+window.location);

let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
];

for(first of names){
	for(second of first){
		for (third of second){
			console.log(third);
		}
	}
}