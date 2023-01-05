const nums = [-1, 3, 2, 0];

// 1. 使用reduce求最大值
console.log( nums.reduce((prev, current) => prev > current ? prev : current, -Infinity) );
