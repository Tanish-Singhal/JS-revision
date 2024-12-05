var fullName = "Tanish Singhal";

var obj = {
  fullName: "John Doe",

  prop: {
    fullName: "Jimmy Smith",
    getFullName: function () {
      return this.fullName;
    },
  },

  getFullName: function () {
    return this.fullName;
  },

  getFullName2: () => this.fullName,
  // this return undefined because, arrow functions always refers to window object, or global object.

  getFullName3: (function () {
    return fullName;
  })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullName2());
console.log(obj.getFullName3);
