const p1 = {
  fname: "Tanish",
  lname: "Singhal",
  getFullName: function() {
    return this.fname + " " + this.lname;
  }
}

const p2 = Object.create(p1);

console.log(p1.getFullName());
console.log(p2.getFullName());  // this is because the __proto__ of p2 is pointing to the p1 object


console.log("p1 is ", p1.fname);
p2.__proto__.fname = "John";

console.log("p1 after is ", p1.fname);
