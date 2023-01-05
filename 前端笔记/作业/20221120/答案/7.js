// 7. 将nums原数组变为[66, 10, 45, 1, 9, 5, 123]
var nums = [123, 5, 9, 1, 45, 10, 66]

// 1.
// var len = nums.length; // 7
// for (var i = len - 1; i >= 0; i--) {
//     // nums[i]: 66, 10, 45, ...
//     nums.push(nums[i]);
// }

// nums.splice(0, len);

// console.log(nums); // [66, 10, 45, 1, 9, 5, 123]

// 2.
for (var i = 0; i < Math.floor(nums.length / 2); i++) {
    // 索引为0 和索引为6 交换
    // 索引为1 和索引为5 交换
    // 索引为2 和索引为4 交换
    // 索引为i 和索引为num.length - 1 - i 交换
    var left = nums[i];
    var right = nums[nums.length - 1 - i];
    nums[i] = right;
    nums[nums.length - 1 - i] = left;
}

console.log(nums);