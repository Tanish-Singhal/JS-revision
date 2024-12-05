const obj = {
  height: 30,
};

console.log(obj.height);

delete obj.height;

console.log(obj.height);



const obj2 = Object.create({
  height: 100,
});               // in this the height was created inside the prototype, not the obj2 object.

console.log(obj2.height);

delete obj2.height;

console.log(obj2.height);  // this will print height 100, because the height roperty was created in the prototype not the obj2 object.
