class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }

  getContact() {
    return this.contact;
  }

  getName() {
    return this.fname + " " + this.lname;
  }
}

const person1 = new Person("Tanish", "Singhal", 9999);
const person2 = new Person("John", "Doe", 8888);

console.log(person2.getName());
