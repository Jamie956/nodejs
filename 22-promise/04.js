//new promise suger for resolve
Promise.resolve(42).then(val => {
  console.log(val);
});

//is equal to
var promise = new Promise(resolve => {
  resolve(43);
});

promise.then(rs => {
  console.log(rs);
});