// Proxy is like a wrapper that intercepts the value given by the user and validate that and then pass it to the object.

// Just lke Zod library

const p1 = {
  fname: "John",
  lname: "Doe",
  age: 30,
};

const p1Proxy = new Proxy(p1, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return false;
  },

  set(target, prop, value) {
    if (!(prop in target)) {
      throw new Error(`Property ${prop} does not exist.`);
    }
    switch (prop) {
      case "fname":
      case "lname":
        if (typeof value !== "string") {
          throw new Error(`${prop} must be a string.`);
        }
        break;
      case "age":
        if (typeof value !== "number") {
          throw new Error(`${prop} must be a number.`);
        }
        if (value < 0) {
          throw new Error(`${prop} must be a positive number.`);
        }
        break;
    }
    target[prop] = value;
  },
});

p1Proxy.age = 100; // age cannot be negative
p1Proxy.fname = "Jane";

console.log(p1Proxy);
