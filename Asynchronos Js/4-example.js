console.log("A");
console.log("B")

setTimeout(() => {
  console.log("C");
}, 5000);
// in this code, due to multiple promise the chance of setTimeout to run will never come
// This is called Starvation.

fetch('API').then(() => {
  console.log("I got the data");

  fetch('API').then(() => {
    console.log("I got the data again");
  })

  fetch('API').then(() => {
    console.log("I got the data again 2");
  })

  fetch('API').then(() => {
    console.log("I got the data again 3");
  })

  // .......
})

console.log("D");
console.log("E");

