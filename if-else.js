var age = 24;

if(age = 18){
    console.log("You are eligible for vote");
}else if(age = 24){
    console.log('I are adult');
}else{
    console.log('I are not');
}

//Another example
// === means it check the data value + data type
if(age === '24'){
    console.log("You are eligible for vote");
}else{
    console.log('Your value is a string. Need number');
}