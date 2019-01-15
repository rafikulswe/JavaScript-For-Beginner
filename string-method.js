//String Methods are- length(), indexOf(), lastIndexOf(), search(), substr(), slice(), replace(), 
//toUpperCase(), toLowerCase(), concat(), trim(), split()

//length()
var txt = "My name is Rafi and i am a Programmer.";
var txtln = txt.length;
console.log(txtln);

//indexOf()
var str = "Please locate where locate occurs!";
var pos1 = str.indexOf("locate");
console.log(pos1);

var pos2 = str.indexOf("locate",15); //first parameter =search text, second para = search start index.
console.log(pos2);

//lastIndexOf()
var strValue = "My name is Rafi and i am a Programmer.";
var outputValue = strValue.lastIndexOf('Rafi');
console.log(outputValue);

//search()
var searchStr = "My name is Rafi and i am a Programmer.";
var searchResult = searchStr.search('Rafi');
console.log(searchResult);

//substr()
var substrValue = "My name is Rafi and i am a Programmer.";
var substrResult = substrValue.substr(11, 4); //first parameter =start index, second para = length of text.
console.log(substrResult);

//slice()
var sliceValue = "My name is Rafi and i am a Programmer.";
var sliceResult = sliceValue.slice(11, 15); //start index, end index
console.log(sliceResult);


//replace()
var repValue = "My name is Rafi and i am a Programmer and work in software firm.";
var repResult = repValue.replace('Programmer', 'Software Engineer');
var repResult = repValue.replace(/and/g, '&'); //here /g is a flag.
console.log(repResult);


//toUpperCase(), toLowerCase()
var caseValue = "My name is Rafi";
console.log(caseValue.toLowerCase());
console.log(caseValue.toUpperCase());

//concat()
var name = "Md.Rafikul Islam";
var surName = "Rafi";
var fullName = name.concat(" ", surName);
console.log(fullName);


//split()
var splitValue = "Rafikul, Shafikul, Another";
var splitResult = splitValue.split(',');
console.log(splitResult);
console.log(splitResult[0]);


//trim()
var str = "       Hello World!        ";
console.log(str.trim());

//extra method
console.log(str.bold());
console.log(str.repeat(2));
