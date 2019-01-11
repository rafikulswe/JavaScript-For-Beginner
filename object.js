//Here person variable is an object and the insite's things are property.
var person = {
    firstName: "Md. Rafikul Islam",
    lastName : "Rafi",
    age      :  [23,24],
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.age);
console.log(person.fullName());