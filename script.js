// console.log('Hi my name is Martin');
// var age = 25;
// var players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
// var carBrands = [
//   'Tesla',
//   'Audi',
//   'Renault',
//   'Volvo',
//   'Mazda',
//   'Fiat',
//   'Ferrari',
// ];
// console.log(carBrands.sort());

// var fruits = ['apple', 'banana', 'kiwi'];
// fruits.push('orange');
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);

// var animals = ['monkey', 'horse', 'dog'];
// console.log(animals.sort());
// animals.unshift('cat');
// console.log(animals);

var fruits = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
var onefruit = new Array();
onefruit = fruits.split('/');
console.log(onefruit);

document.write(onefruit.join('<br> <br>'));
