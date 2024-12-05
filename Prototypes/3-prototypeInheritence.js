const p1 = {
  xp1: "I am inside p1",
};

const p2 = {
  xp2: "I am inside p2",
  __proto__: p1,
};

const p3 = {
  xp3: "I am inside p3",
  __proto__: p2,
};

console.log(p3.xp1);


class Student {
  constructor() {
    this.fname = "Tanish";
  }

  getName() {
    return "this.fname";
  }
}

const s1 = new Student();
const s2 = {
  __proto__: Student.prototype,
}
console.log(s2.getName());
