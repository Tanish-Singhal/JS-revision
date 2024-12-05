const tanish = {
  name: "Tanish Singhal",
  sayName: function () {
    console.log(this.name);
  },
};

const john = {
  name: "John Doe",
  sayName: function () {
    console.log(this.name);
  },
};

john.sayName.call(tanish);  // .call has the context of tanish object
john.sayName(tanish);
