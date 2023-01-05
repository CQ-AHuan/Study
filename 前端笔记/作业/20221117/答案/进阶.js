// 1. 输入一个数字，输出该数字是否为质数
// 13: 1, 13 是质数
// 17: 1, 17 是质数
// 93: 不是质数

// var n = +prompt('输入一个数字');
// var n = 93;
// // 假装n是质数
// var flag = true;

// // if (n === 2) {
// //     console.log('是质数');
// // }

// for (var i = 2; i < n / 2; i++) {
//     // i: 2 ... 12
//     if (n % i === 0) {
//         // 果然被推翻了
//         console.log('不是质数');
//         flag = false;
//         // 打断
//         break;
//     }
// }

// // 真是质数
// if (flag) {
//     console.log('是质数');
// }

// 2. 输入一个数字n(大于2)，输出下列数列的第n项
// 斐波那契数列
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
var n = 8; // 期待的结果是21

var prev1 = 1;
var prev2 = 1;

// n: 3 >>> i < 2
// n: 4 >>> i < 3
var current;
for (var i = 0; i < n - 1; i++) {
    current = prev1 + prev2; // 1 + 1 = 2 >>> 第2个数
    prev1 = prev2;
    prev2 = current;
}
console.log(current);
// 第一轮: current: prev1 + prev2 >>> 2
// 第二轮:
