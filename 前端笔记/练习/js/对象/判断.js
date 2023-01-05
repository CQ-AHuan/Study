// typeof null === 'object'

const obj = {};
const n = null;
const arr = [];
function fn() {}

// console.log(typeof obj); // 'object'
// console.log(typeof n); // 'object'
// console.log(typeof arr); // 'object'
// console.log(typeof fn); // 'function'

console.log(obj.constructor === Object); // true
console.log(arr.constructor === Object); // false
// console.log(n.constructor === Object);
