function customPromise() {
  return new Promise((resolve, reject) => {
    // ....
    resolve("Success");
  });
}

customPromise()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});
