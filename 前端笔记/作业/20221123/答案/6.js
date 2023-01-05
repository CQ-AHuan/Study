// 6. 封装一个函数, 输入几个数组, 返回最长的数组的和
function getSum(...numsList) {

    // 以最长的数组为标志位
    var longest = [];
    for (var nums of numsList) {
        // nums: [1, 2, 3, 4]
        if (nums.length > longest.length) {
            longest = nums;
        }
    }

    var sum = 0;
    for (var num of longest) {
        sum += num;
    }
    return sum;
}

console.log(getSum([1, 2, 3, 4], [4, 5], [6, 7])); // 10
console.log(getSum([1, 2, 3, 4, 5], [4, 5], [100, 101])); // 15
console.log(getSum([1, 2, 3, 4], [4, 5], [6, 7, 8, 9, 10])); // 40
