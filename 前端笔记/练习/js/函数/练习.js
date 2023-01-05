// 1. 封装一个函数，输入一个数字数组，返回奇数的个数
function getOddCount(nums) {
    var count = 0;
    for (var num of nums) {
        // num: 1, 2, 3
        if (num % 2 === 1) {
            count++;
        }
    }
    return count;
}

console.log(getOddCount([1, 2, 3])); // 2
console.log(getOddCount([1, 3, 5, 7, 8])); // 4

// 2. 封装一个函数，输入两个数字，返回较大的一个
function getMaxFromTwoNum(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

console.log(getMaxFromTwoNum(2, 5)); // 5
console.log(getMaxFromTwoNum(6, 5)); // 6

// 3. 封装一个函数，输入一个数字数组，返回数组中最大的数字
function getMax(nums) {
    var max = -Infinity;
    for (var num of nums) {
        // num: 其中一个数字
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log(getMax([-1, -2, -3])); // 3
console.log(getMax([1, 3, 5, 7, 8, -1])); // 8

// 4. 封装一个函数, 输入一个数字数组, 返回数组中第一个偶数, 如果没有 则返回undefined
function findEven(nums) {
    for (var num of nums) {
        if (num % 2 === 0) {
            return num;
        }
    }
}

console.log(findEven([1, 2, 3])); // 2
console.log(findEven([1, 3, 5, 7, 9, -1])); // undefined

