//Simple example of function
function valueSum(a,b){
    return a + b;
}
console.log('Sum of these value is '+valueSum(10,20));

//we can store a function in a variable
var sumResult = valueSum(15, 20);
console.log(sumResult);

//CallBack Function
var names = ['Mr. Rafi', 'Mr. Messi', 'Ms Miske'];
names.forEach(print);

function print(nameParam){
    console.log(nameParam);  
}

//we can use this function as a parameter inline.
names.forEach(function(nameParam){
    console.log(nameParam);
})

//Another dynamic Callback function example
function operation(a, b, CallBack){
    var sum = a+b;
    var sub = a-b;
    CallBack(sum, sub);
}
function Output(sum, sub){
    console.log(sum, sub);
}
// function multiply(sum, sub){
//     console.log(sum*sub);
// }
operation(10, 5, Output);
operation(10, 5, function(sum, sub){
    console.log(sum*sub);
});
