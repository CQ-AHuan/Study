// 封装一个函数,求所有参数的最小值
function getMin(...nums) {
    // nums: [1, 2, 3, 4, -1]
    var min = Infinity;
    for (var num of nums) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.log(getMin(1, 2, 3, 4, -1)); // -1
console.log(getMin(1, 2, 3, 4, 5)); // 1
