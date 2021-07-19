let person = {
	name: "Ezekiel",
	age: "30 ",
};

person.name = "lakan";
person["name"] = "michael";
console.log(person);

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors);

function greet(name, lastName) {
	console.log("Hello" + name + "" + lastName);
}
greet("Ezekiel", "Adekunle");
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
	let getRandom = Math.floor(Math.random() * range + start);
	while (getRandom > range) {
		getRandom = Math.floor(Math.random() * range + start);
	}
	return getRandom;
};
console.log(getRandomNumber(500000, 1000000));

var myVar = 87;
myVar = myVar + 1;
myVar++; //incrementing

var myVar = 11;
myVar = myVar - 1;
myVar--; //decrementing

var myDecimal = 5.5;
var ourDecimal = 0.5;

var product = 2.0 * 2.0; //multiplying Decimals
console.log(product);

var quotient = 4.4 / 2.0; //dividing decimals
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
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

var myStr = '<a href="https://www.example.com" target="_blank">Link</a>'; //quoting strings with single quotes
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

var myString = "Firstline\n\t\\Secondline\nthirdline"; //Escaping sequences in strings
console.log(myString);

var myString = "Ezekiel. " + "Adekunle."; //concatenating strings with the plus operator
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
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result +=
		"The " +
		myAdjective +
		" " +
		myNoun +
		" " +
		myVerb +
		" " +
		myAdverb +
		" " +
		"at the man";
	return result;
}

console.log(wordBlanks("lion", "big", "roared", "loudly"));

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks =
	"The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);

function mySnackChoice(eggRoll) {
	if (eggRoll >= 1) {
		return "buy eggRoll";
	} else if (eggRoll < 1) {
		return "buy cake";
	} else {
		return "buy buns";
	}
}
console.log(mySnackChoice());

/*ESCAPING LITERAL QUOTES USING BACKSLASH*/
var str = 'I am a "double quoted" string inside "double quotes".';
console.log(str);

//STORE MULTIPLE VALUES IN ONE VARIABLE USING JAVASCRIPT ARRAYS
var myPersonalArray = ["Ezekiel Adekunle ", 18];
console.log(myPersonalArray);

//NEST ONE ARRAY WITHIN ANOTHER ARRAY
var myMultiDimesionalArray = [
	["Coders", 2000000],
	["Programers", 2],
];
console.log(myMultiDimesionalArray);

//ACCESS ARRAY DATA WITH INDEXES
var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

//MODIFY ARRAY DATA WITH INDEXES
var myOwnArray = [18, 19, 20];
myOwnArray[0] = 20;

console.log(myOwnArray);

//ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var muiltiDimensionalArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

var mySetOfArray = muiltiDimensionalArray[2][1];
console.log(mySetOfArray);

//MANIPULATE ARRAYS WITH PUSH()
var mySecondArray = ["Ezekiel", "Adekunle"];
mySecondArray.push(19);
console.log(mySecondArray);

//MANIPULATE ARRAYS WITH POP();
var myArrayData = [1, 2, 3];
myArrayData.pop();
console.log(myArrayData);

//MANIPULATE ARRAYS WITH SHIFT()
var myThirdArray = [
	["Ezekiel Adekunle", 18],
	["Adeyemi", 22],
];
myThirdArray.shift();
console.log(myThirdArray);

//MANIPULATE ARRAYS WITH UNSHIFT()
var myFourthArray = ["Adekunle"];
myFourthArray.unshift("Ezekiel");
console.log(myFourthArray);

//SHOPPING LIST
var myList = [
	["Garri", 10],
	["GroundNut", 20],
	["Milk", 30],
	["Sugar", 40],
	["Water", 50],
];
console.log(myList);

//WRITE REUSABLE JAVASCRIPT WITH FUNCTIONS
function reusableFunction() {
	console.log("Hello world");
}
reusableFunction();

//PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function functionWithArgs(a, b) {
	console.log(a + b);
}
functionWithArgs(20, 30);

//GLOBAL SCOPE AND FUNCTIONS
var myGlobal = 10;

function fun1() {
	oopsGlobal = 5;
}

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

//LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
	var myLocalVar;
	console.log("inside MyLocalScope", myLocalVar);
}

//GLOBAL VS LOCALSCOPE IN FUNCTION
var myFunTime = "watch movies";
function ezeFun() {
	var myFunTime = "Eating";
	return "myFunTime";
	console.log(myFunTime);
}
console.log(myFunTime);

//RETURN A VALUE FROM A FUNCTION WITH RETURN
function timesFive(num) {
	return num * 5;
}

//UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
var sum = 0;
function addThree() {
	sum = sum + 3;
}
function addFive() {
	sum = sum + 5;
}
addThree();
addFive();

//ASSIGNMENT WITH A RETURNED VALUE
var processed = 0;
function processArg(num) {
	return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

//STAND IN LINE
function nextInLine(arr, item) {
	arr.push(item);
	var removed = arr.shift();
	return removed;
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//UNDERSTANDING BOOLEAN VALUES
function welcomeToBoolean() {
	return true;
}

//USE CONDITIONAL LOGIC WITH IF STATEMENTS
function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}

//COMPARISON WITH THE EQUALITY OPERATOR(==)
function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}
testEqual(10);

//COMPARISON WITH THE STRICT EQUALITY OPERATOR(===)
function testStrict(val) {
	if (val === 7) {
		return "Equal";
	}
	return "Not Equal";
}
testStrict(10);

//PRACTISE COMPARING DIFFRENT VALUES
function compareEquality(a, b) {
	if (a === b) {
		return "Equal";
	}
	return "Not Equal";
}
compareEquality(10, "10");
console.log(a, b);

//COMPARISON WITH THE INEQUALITY OPERATOR(!=)
function testNotEqual(val) {
	if (val != 99) {
		return "Not Equal";
	}
	return "Equal";
}
testNotEqual(10);

//COMAPRISON WITH THE STRICT INEQUALITY OPERERATOR(!==)
function testStrictNotEqual(val) {
	if (val !== 17) {
		return "Not Equal";
	}
	return "Equal";
}
testStrictNotEqual(10);

//COMAPRISON WITH THE GREATER THAN OPERATOR(>)
function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}
	if (val > 10) {
		return "Over 10";
	}

	return "10 or Under";
}
testGreaterThan(10);
console.log(testGreaterThan());

//COMPARISON WITH THE GREATER THAN OR EQUAL TO OPERATOR(>=)
function testGreaterOrEqual(val) {
	if (val >= 20) {
		return "20 or Over";
	}
	if (val >= 10) {
		return "10 or Over";
	}
	return "Less than 10";
}
testGreaterOrEqual(10);
console.log(testGreaterOrEqual());

//COMPARISON WITH THE LESS THAN OPERATOR(<)
function testLessThan(val) {
	if (val < 25) {
		return "Under 25";
	}

	if (val < 55) {
		return "Under 55";
	}
	return "55 or Over";
}
testLessThan(10);
console.log(testLessThan());

//COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR)(<=)
function testLessOrEqual(val) {
	if (val <= 12) {
		return "Smaller Than Or Equal To 12";
	}

	if (val <= 24) {
		return "Smaller Than Or Equal To 24";
	}
	return "More Than 24";
}
testLessOrEqual(10);
console.log(testLessOrEqual());

//COMPARISONS WITH THE LOGICAL AND OPERATOR(&&)
function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}
testLogicalAnd(10);
console.log(testLogicalAnd());

//COMPARISONS WITH THE LOGICAL OR OPERATOR(||)
function testLogicalOr(val) {
	if (val < 10 || val > 20) {
		return "OutSide";
	}
	return "Inside";
}
testLogicalOr(15);
console.log(testLogicalOr());

//INTRODUCING THE ELSE STATEMENT
function testElse(val) {
	var result = "";
	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Less";
	}
	return result;
}
testElse(4);
console.log(testElse());

//INTRODUCING ELSE IF STATEMENT
function testElseIf(val) {
	if (val > 10) {
		return "Greater Than 10";
	} else if (val < 5) {
		return "Less Than 5";
	} else {
		return "Between 5 and 10";
	}
}
testElseIf(7);
console.log(testElseIf());

//LOGICAL ORDER IN IF ELSE STATEMENT
function orderMyLogic(val) {
	if (val < 5) {
		return "Less than 5";
	} else if (val > 20) {
		return "Bigger than 20";
	} else {
		return "Less than or Equal to 20";
	}
}
orderMyLogic(7);
console.log(orderMyLogic());

//CHAINING IF/ELSE STATEMENTS
var num;
function testSize(num) {
	if (num < 5) {
		return "Tiny";
	} else if (num < 10) {
		return "Small";
	} else if (num < 15) {
		return "Medium";
	} else if (num < 20) {
		return "Large";
	} else if (num >= 20) {
		return "Huge";
	} else {
		return "None of the above";
	}
}
testSize(7);
console.log(testSize(num < 5));

//GOLF CODE
var names = [
	"Hole-in-one",
	"Eagle",
	"Birdie",
	"Par",
	"Bogey",
	"Double Bogey",
	"Go Home",
];
function golfScore(strokes, par) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else {
		return names[6];
	}
}
golfScore(5, 6);
console.log(golfScore(5, 6));

//SELECTING FROM MANY OPTIONS WITH THE SWITCH STATEMENTS
function caseSwitchStaments(val) {
	var answer = "";
	switch (val) {
		case 1:
			return "alpha";
			break;
		case 2:
			return "beta";
			break;
		case 3:
			return "gamma";
			break;
		case 4:
			return "delta";
			break;
	}
	return answer;
}
console.log(caseSwitchStaments(1));

//ADDING A DEFAULT OPTION IN SWITCH STATEMENTS
function switchOfStuff(val) {
	var answer = "";
	switch (val) {
		case "a":
			return "apple";
			break;
		case "b":
			return "bird";
			break;
		case "c":
			return "cat";
			break;
		default:
			return "stuff";
			break;
	}
	return answer;
}
console.log(switchOfStuff("a"));

//MULTIPLE IDENTICAL OPTION IN SWITCH STATEMENTS
function sequentialSizes(val) {
	var answer = "";
	switch (val) {
		case 1:
		case 2:
		case 3:
			return "Low";
			break;
		case 4:
		case 5:
		case 6:
			return "Mid";
			break;
		case 7:
		case 8:
		case 9:
			return "High";
			break;
	}
	return answer;
}
console.log(sequentialSizes(9));

//REPLACING IF/ELSE CHAINS WITH SWITCH
function chainToSwitch(val) {
	var answer = "";
	switch (val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed by me so much";
			break;
		case 7:
			answer = "Ate Nine";
			break;
	}
	return answer;
}
console.log(chainToSwitch("bob"));

//RETURNING BOOLEAN VALUES FROM FUNCTIONS
function isLess(a, b) {
	return a < b;
}
console.log(isLess(10, 15));

//RETURN EARLY PATTERNS FOR FUNCTIONS
function abTest(a, b) {
	if (a < 0 || b < 0) {
		return undefined;
	}
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 0));
}
console.log(abTest(2, 2));

//COUNTING CARDS
var count = 1;
function cc(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
	}
	if (count > 0) {
		return count + " Bet";
	} else {
		return count + " Hold";
	}
}
console.log(cc());

//BUILD JAVASCRIPTS OBJECTS
var myDog = {
	name: "Busky",
	legs: 4,
	tails: 1,
	friends: ["man"],
};
console.log(myDog);

//ACCESSING OBJECT PROPERTIES WITH DOT NOTATION (.)
var testMyObj = {
	hat: "ballcap",
	shirt: "jersey",
	shoes: "cleats",
};
var hatValue = testMyObj.hat;
var shirtValue = testMyObj.shirt;
console.log(hatValue);

//ACCESSING OBJECTS PROPERTIES WITH BRACKET NOTATION ([])
var myTestObj = {
	"food item": "Hamburger",
	"my vegies": "Brocolli",
	"my drink": "Water",
};
var myFood = myTestObj["food item"];
var myVegetable = myTestObj["my vegies"];
var drinkValue = myTestObj["water"];
console.log(myFood);

//ACCESING OBJECT PROPERTIES WITH VARIABLES
var testObjVar = {
	12: "Namath",
	16: "Montana",
	19: "Unitas",
};

var playerNumber = 19;
var playerName = testObjVar[playerNumber];
console.log(playerName);

//UPDATING OBJECT PROPERTIES
var myLion = {
	name: "Simba",
	leg: 4,
	tails: 1,
	friends: "Everything",
};
myLion.name = "King Simba";
console.log(myLion);

//ADD NEW PROPERTIES TO A JAVASCRIPT OBJECT
var myMonkey = {
	name: "Chips",
	legs: 2,
	tails: 1,
	friends: ["Other Monkeys"],
};
myMonkey.food = "Bannana";
console.log(myMonkey);

//DELETE PROPERTIES FROM A JAVASCRIPT OBJECT
var myCoder = {
	name: "Camper",
	legs: 4,
	tails: "none",
	friends: ["Other Coders"],
};
delete myCoder.tails;
console.log(myCoder);

//USING OBJECTS FOR LOOKUPS
function phoneticLookup(val) {
	var result = "";
	var lookup = {
		alpha: "Adams",
		bravo: "Boston",
		charlie: "Chicago",
		delta: "Denver",
		echo: "Easy",
		foxtrot: "Frank",
	};
	result = lookup[val];
	return result;
}
console.log(phoneticLookup("alpha"));

//TESTING OBJECTS FOR PROPERTIES
function checkObj(obj, checkProp) {
	if (obj.hasOwnProperty(checkProp)) {
		return obj[checkProp];
	} else {
		return "Not found";
	}
}

//MANIPULATING COMPLEX OBJECTS
var myMusic = [
	{
		artist: "Daft Punk",
		title: "HomeWork",
		release_year: 1997,
		formats: ["CD", "Cassette", "LP"],
		gold: true,
	},
	{
		artist: "Billy Joel",
		title: "Piano Man",
		release_year: 1973,
		formats: ["CD", "8T", "LP"],
		gold: true,
	},
];
console.log(myMusic);

//ACCESSING NESTED OBJECTS
var myStorage = {
	car: {
		inside: {
			"glove box": "maps",
			"passenger seat": "crumbs",
		},
		outside: {
			trunk: "jack",
		},
	},
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//ACCESSING NESTED ARRAYS
var myPlants = [
	{
		type: "flowers",
		lists: ["rose", "tulip", "dandelion"],
	},
	{
		type: "trees",
		lists: ["fir", "pine", "birch"],
	},
];
var secondTree = myPlants[1].lists[1];
console.log(secondTree);

//RECORD COLLECTION
var recordCollection = {
	2548: {
		albumTitle: "Slippery When Wet",
		artist: "Bon Jovi",
		tracks: ["Let It Rock", "You Give Love a Bad Name"],
	},
	2468: {
		albumTitle: "1999",
		artist: "Prince",
		tracks: ["1999", "Little Red Corvette"],
	},
	1245: {
		artist: "Robert Palmer",
		tracks: [],
	},
	5439: {
		albumTitle: "ABBA Gold",
	},
};

function updateRecords(records, id, prop, value) {
	if (prop !== "tracks" && value !== "") {
		records[id][prop] = value;
	} else if (
		prop === "tracks" &&
		records[id].hasOwnProperty("tracks") === false
	) {
		records[id][prop] = [value];
	} else if (prop === "tracks" && value !== "") {
		records[id][prop].push(value);
	} else if (value === "") {
		delete records[id][prop];
	}
	return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

//ITERATE WITH JAVASCRIPT WHILE LOOP
var myArrayLoop = [];
var i = 5;
while (i >= 0) {
	myArrayLoop.push(i);
	i--;
}
console.log(myArrayLoop);

//ITERATE WITH JAVASCRIPT FOR LOOP
var myArrayFor = [];
for (var i = 1; i < 6; i++) {
	myArrayFor.push(i);
}
console.log(myArrayFor);

//ITERATE ODD NUMBERS WITH FOR LOOP
var myArrayOdd = [];
for (var i = 1; i < 10; i += 2) {
	myArrayOdd.push(i);
}
console.log(myArrayOdd);

//COUNT BACKWARDS WITH A FOR LOOP
var myArrayBack = [];
for (var i = 9; i > 0; i -= 2) {
	myArrayBack.push(i);
}

//ITERATE THROUGH AN ARRAY WITH A FOR LOOP
var myArrayIt = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArrayIt.length; i++) {
	total += myArrayIt[i];
}
console.log(total);

//NESTING FOR LOOPS
function multiplyAll(arr) {
	var product = 1;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product = product * arr[i][j];
		}
	}
	return product;
}
multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);
console.log(product);

//ITERATE WITH JAVASCRIPT DO...WHILE LOOPS
var myDoWhileArr = [];
var i = 0;
do {
	myDoWhileArr.push(i);
	i++;
} while (i <= 10);
console.log(i);

//REPLACE LOOPS USING RECURSION
function sum(arr, n) {
	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}
}
console.log(sum);

//PROFILE LOOKUP
var contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];
function lookUpProfile(name, prop) {
	for (let x = 0; x < contacts.length; x++) {
		if (contacts[x].firstName === name) {
			if (contacts[x].hasOwnProperty(prop)) {
				return contacts[x][prop];
			} else {
				return "No such property";
			}
		}
	}
	return "No such contact";
}
console.log(lookUpProfile("Akira", "likes"));

//GENERATE RANDOM FRACTIONS WITH JAVASCRIPT(Math.random())
function randomFraction() {
	var fraction = 0;
	while (fraction === 0) {
		fraction = Math.random();
	}
	return fraction;
}
console.log(randomFraction());

//GENERATE RANDOM WHOLE NUMBERS WITH JAVASCRIPT(Math.floor())
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNumber() {
	return Math.floor(Math.random() * 10);
}
console.log(randomNumberBetween0and19);

//GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE(min and max value)
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(10, 30));

//USE THE PARSEINT FUNCTION
function convertToInteger(str) {
	return parseInt(str);
}
console.log(convertToInteger("56"));

//USE THE PARSEINT FUNCTION WITH A RADIX
function convertToInteger2(string) {
	return parseInt(string, 2);
}
console.log(convertToInteger2("10011"));

//USE THE CONDITIONAL (TERNARY) OPERATOR
function checkEqual(a, b) {
	return a === b ? "Equal" : "Not Equal";
}
console.log(checkEqual(1, 2));

//USE MULTIPLE CONDITIONAL (TERNARY) OPERATOR
function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : zero;
}
console.log(checkSign(10));

//USE RECURSION TO CREATE A COUNTDOWN
function countdown(n) {
	if (n < 1) {
		return [];
	} else {
		const arr = countdown(n - 1);
		arr.unshift(n);
		return arr;
	}
}
console.log(countdown(10));

//USE RECURSION TO CREATE A RANGE OF NUMBERS
function rangeOfNumbers(startNum, endNum) {
	if (endNum - startNum === 0) {
		return [startNum];
	} else {
		var num = rangeOfNumbers(startNum, endNum - 1);
		num.push(endNum);
		return num;
	}
}
console.log(rangeOfNumbers(1, 5));
