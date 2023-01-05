// // 1. 打印[1, 2)的随机数
// console.log(Math.random() + 1);

// // 2. 打印[-1, 1)的随机数
// console.log(Math.random() * 2 - 1);

// // 3. 打印1到10的随机整数
// console.log(Math.floor(Math.random() * 10 + 1));

// // 4. 打印50到70的随机整数

function randomInt(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
console.log(randomInt(1, 10));
