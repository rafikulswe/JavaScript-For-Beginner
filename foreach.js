var amountArr = [10, 20, 30];
var result = 0;
amountArr.forEach(arrayItem => {
    result += arrayItem;
});
console.log('Total Amount is '+result);


//How foreach function work
var names = ['Mr. Rafi', 'Mr. Messi', 'Ms Miske'];
function arrTraverse(names, rollback){
    for(var i=0; i<=names.length; i++){
        rollback(names[i]);
    }
}
arrTraverse(names, function(newPara){
    console.log(newPara);
});