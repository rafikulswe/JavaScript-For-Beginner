var name = ['Rafi', 'Mafi', 'Kafi', 'Safi'];
console.log(name);
console.log(name[1]);
console.log(name.indexOf('Kafi'));
console.log(name.length);

//Array element push
name.push('Mr. X');
console.log(name);

//Array element delete
name.splice(name.length-1, 1);
console.log(name);

//Array element replace
name.splice(name.length-1, 1, 'New Added');
console.log(name);


//Array Sorting
var arrysorted = name.sort();
console.log(arrysorted);

//Array object example
var age = {
    Rafi : 24,
    Safi : 22,
    Kafi : 20
};
console.log(age['Rafi']);
console.log(age);
