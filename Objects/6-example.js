const tanish = {
  name: "John Doe",
  sayName: function () {
    console.log(this.name);
  },
};

setTimeout(() => {
  tanish.sayName();
}, 3000);
