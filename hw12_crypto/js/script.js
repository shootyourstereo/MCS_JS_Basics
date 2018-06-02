console.log('You are at '+window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]



const bitcoinTitle = document.querySelector('.bitcoin .title');
const ethereumTitle = document.querySelector('.ethereum .title');
const liteTitle = document.querySelector('.litecoin .title');

const bitcoinPrice = document.querySelector('.bitcoin .price');
const ethereumPrice = document.querySelector('.ethereum .price');
const litePrice = document.querySelector('.litecoin .price');

const bitcoinLevel = document.querySelector('.bitcoin .level');
const ethereumLevel = document.querySelector('.ethereum .level');
const liteLevel = document.querySelector('.litecoin .level');


bitcoinTitle.innerHTML = crypto[0].name
ethereumTitle.innerHTML = crypto[1].name
liteTitle.innerHTML = crypto[2].name

bitcoinPrice.innerHTML = crypto[0].price
ethereumPrice.innerHTML = crypto[1].price
litePrice.innerHTML = crypto[2].price


bitcoinLevel.style.width = crypto[0].price + 'px';
ethereumLevel.style.width = crypto[1].price + 'px';
liteLevel.style.width = crypto[2].price + 'px';