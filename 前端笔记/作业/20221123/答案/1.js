// 1. 封装一个函数,求参数中所有数字的最小值

function getMin(...numsList) {
    // 期待: 参数中的每一个数字
    var min = Infinity;
    for (var nums of numsList) {
        // nums: [1, 2, 3]
        for (var num of nums) {
            // num: 1
            if (num < min) {
                min = num;
            }
        }
    }
    return min;
}


// 一个数组命名为numsList
console.log(getMin([1, 2, 3], [4, -1])); // -1
console.log(getMin([1, 2, 3, 4, 5])); // 1
console.log(getMin([1, 2, 3], [5, 7], [-1, -2])); // -2
