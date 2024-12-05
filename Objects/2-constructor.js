// The constructor act as a blueprint for creating objects.

function Person(fname, lname, contact) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;
  this.getName = function() {
    console.log(this.fname, this.lname);
  }
}

const person1 = new Person("Tanish", "Singhal", 9999);
const person2 = new Person("John", "Doe", 8888);

console.log(person1.getName());
