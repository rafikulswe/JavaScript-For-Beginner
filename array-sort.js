//Array sort-
//sort()
var names = ['rafi', 'moni', 'miske', 'tara'];
console.log(names.sort());

//reverse()
console.log(names.reverse());

//Num sorting
var numbers = [50, 90, 6, 60, 30, 2];
console.log(numbers.sort(function(a, b){
    return a-b;
}));
console.log(numbers.sort(function(a, b){
    return b-a;
}));

//array max and min value finding
var numbers = [50, 90, 6, 60, 30, 2];
console.log(Math.max.apply(null, numbers)); //how it's work is given below

function myArrayMax(numbers) {
    var len = numbers.length
    var max = -Infinity;
    while (len--) {
      if (numbers[len] > max) {
        max = numbers[len];
      }
    }
    return max;
  }
console.log(myArrayMax(numbers));

console.log(Math.min.apply(null, numbers)); //how it's work is given below
