//Array Method- pop(), push(), shift(), unshift(), concat(), slice(), toString()
//pop()
var fruits = ['apple', 'banana0', 'mango'];
console.log(fruits.pop());
console.log(fruits);

//push()
fruits.push('lemon');
console.log(fruits);

//shift()
fruits.shift();
console.log(fruits);

//unshift()
fruits.unshift('black bary');
console.log(fruits);

//for change the index element of array
fruits[0] = 'bary';
console.log(fruits);

//concat()
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
console.log(myGirls.concat(myBoys));
console.log(myGirls.concat(myBoys, arr3));

//slice()
var fruits = ['apple', 'banana', 'mango', 'lemon'];
console.log(fruits.slice(2)); //parameter is a array starting index.

//toString()
console.log(fruits.toString()); //it make an array to string.








