//simple for loop example
var name = "Md.Rafikul Islam";
for(var i=0; i<=10; i++){
    console.log(name);
}

//Another for loop example
var nameArray = ['Rafi', 'Moni', 'Rafiya'];
var text = '';
for(var i = 0; i < nameArray.length; i++){
    text += nameArray[i] + '<br>';
}
console.log(text);


var amountArr = [10, 20, 30];
var result = 0;
amountArr.forEach(item => {
    result += item;
});
console.log(result);

