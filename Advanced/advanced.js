/*Adv Exercise 1*/
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var sum;

c=Number(c);
d=Number(d);
sum=a+b+c+d+e;
console.log(sum);

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var multiply_product;

f=Number(f);
i=Number(i);
multiply_product=f*g*h*i;
console.log(multiply_product);

var divide_product;
divide_product=sum/multiply_product;
document.write(divide_product);

/*Adv Execise 2*/
var array_exercise = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27], 
[7, 4, 28, 14], 
[3, 10, 25, 7], 
[21, 4, 6, 17], 
[3, 5, 26, 3] 
];

console.log(array_exercise[1][1],
	array_exercise[4][2],
	array_exercise[5][3],
	array_exercise[2][3],
	array_exercise[2][1]
	);
