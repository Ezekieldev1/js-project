let person = {
    name: "Ezekiel",
    age: "30 "
};
person.name = "lakan";
person["name"] = "michael";
console.log(person);
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
function greet(name, lastName) {
    console.log('Hello' + name + '' + lastName);
}
greet('Ezekiel', 'Adekunle');
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);

var sum = 10 + 10;
console.log(sum);

var difference = 45 - 37;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

let getRandomNumber = function (start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}
console.log(getRandomNumber(500000, 1000000));


var myVar = 87;
myVar = myVar + 1;
myVar++;//incrementing

var myVar = 11;
myVar = myVar - 1;
myVar--;//decrementing

var myDecimal = 5.5;
var ourDecimal = 0.5;

var product = 2.0 * 2.0;//multiplying Decimals
console.log(product);

var quotient = 4.4 / 2.0;//dividing decimals
console.log(quotient);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var a = 12;
var b = 15;
var c = 20;

a += 12;
b += 15;
c += 15;
console.log(a, b, c);

var a = 15;
var b = 10;
var c = 20;

a -= 5;
b -= 5;
c -= 10;
console.log(a, b, c);

var a = 3;
var b = 4;
var c = 4.5;

a *= 10;
b *= 20;
c *= 30;
console.log(a, b, c);

var a = 12;
var b = 15;
var c = 20;

a /= 2;
b /= 3;
c /= 2;
console.log(a, b, c);

/*declaring a string */
var firstName = "Ezekiel";
var lastName = "Adekunle";

/*Escaping literal Quotes in string*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

var myStr = '<a href="https://www.example.com" target="_blank">Link</a>';//quoting strings with single quotes 
console.log(myStr);

/******
CODE OUTPUT
\' single quote
\" double quote
\\ back slash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*******/

var myString = "Firstline\n\t\\Secondline\nthirdline";//Escaping sequences in strings
console.log(myString);

var myString = "Ezekiel. " + "Adekunle.";//concatenating strings with the plus operator
console.log(myString);

/*concatenating strings with the plus equals to operator*/
var myString = "This is my first sentence. ";
myString += "This is my second sentence";
console.log(myString);

/*constructing strings with variables*/
var myName = "Ezekiel";
var myString = "Hello, my name is " + myName + ", how are you?";
console.log(myString);

var myAssist = "I am here to assist you";
var myString = myAssist + " with your computer activities. ";
console.log(myString);

/*Appending variables to strings with the plus equals operator*/
var anAdjective = "awesome!";
var ourString = "FreecodeCamp is ";
ourString += anAdjective;
console.log(ourString);

var myAdjective = "Intresting";
var myStr = "Learning to code is ";
myStr += myAdjective;
console.log(myStr);

/*find the length of a string*/
var firstNameLength = 0;
var firstName = "Adekunle";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Ezekiel";

lastNameLength = lastName.length;
console.log(lastNameLength);

/*Bracket notation to find characters in string*/
var firstLetterOfFirstName = "";
var firstName = "Ezekiel";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var thirdLetterOfLastName = "";
var lastname = "Adekunle";

thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

/*Bracket notation to find the last character in string*/
var lastLetterOfLastName = lastName[lastName.length - 1];
var lastName = "Ezekiel";
console.log(lastLetterOfLastName);

/*word Blanks*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result +="The " + myAdjective +" " + myNoun +" " + myVerb +" " + myAdverb +" " + "at the man";
    return result;
}

console.log(wordBlanks("lion", "big", "roared", "loudly"));

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " +myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);

eggRoll= object(eggRoll);
if (thereIsNoEggRoll(eggRoll)) {
  return= "buy cake";
} else {
  return = "buy buns") ;
}
