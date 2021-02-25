let person={
    name:"Ezekiel",
    age:"30 "
};
person.name="lakan";
person["name"]="michael";
console.log(person);
let selectedColors=['red', 'blue'];
selectedColors[2]='green';
console.log(selectedColors);
function greet(name, lastName) {
    console.log('Hello' + name +'' + lastName);
}
greet('Ezekiel', 'Adekunle');
function square(number) {
    return number * number;
}
let number=square(2);
console.log(number);

var sum = 10 + 10;
console.log(sum);

var difference = 45 - 37;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66/33;
console.log(quotient);

let getRandomNumber=function(start, range){
    let getRandom=Math.floor((Math.random()*range)+start);
    while(getRandom > range){
        getRandom=Math.floor((Math.random()*range)+start);
    }
    return getRandom;
}
console.log(getRandomNumber(500000, 1000000));


var myVar=87;
myVar = myVar+1;
myVar++;//incrementing

var myVar=11;
myVar = myVar-1;
myVar--;//decrementing

var myDecimal=5.5;
var ourDecimal=0.5;

var product=2.0 * 2.0;//multiplying Decimals
console.log(product);

var quotient=4.4 /2.0;//dividing decimals
console.log(quotient);

var remainder;
remainder= 11 % 3;
console.log(remainder);

var a = 12;
var b = 15;
var c = 20;

a +=12;
b += 15;
c += 15;
console.log(a, b, c);

var a =15;
var b =10;
var c =20;

a -= 5;
b -= 5;
c -= 10;
console.log(a, b, c);

var a = 3;
var b = 4;
var c = 4.5;

a *=10;
b *=20;
c *=30;
console.log(a, b, c);

