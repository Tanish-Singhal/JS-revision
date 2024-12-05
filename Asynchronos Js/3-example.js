for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// 10 10 10 10 10 10 10 10 10 10

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// 0 1 2 3 4 5 6 7 8 9

// This is because the variable i is declared using var in the first loop, which makes it a global variable. The value of i is 10 when the loop ends. The setTimeout function is called after the loop ends, so the value of i is 10 in all the setTimeout functions.

// while the variable i is declared using let in the second loop, which makes it block-scoped. The value of i is the same as the value of i in the loop when the setTimeout function is called. So, the value of i is different in all the setTimeout functions.
