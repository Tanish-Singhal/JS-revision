const person1 = {
  fname: "Tanish",
  lname: "Singhal",
  contact: 9999999999,
  getName: function() {
    console.log("Tanish");
  }
}

const person2 = {
  fname: "John",
  lname: "Doe",
  contact: 9999999999,
  getName: function() {
    console.log("John");
  }
}

console.log(person2.lname);
console.log(person1.getName());

// Disadvantags:
// - for more similar objects, we have to write similar code again and again
