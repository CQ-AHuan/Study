// 使用nums数组，生成新数组[66, 10, 45, 1, 9, 5, 123]
var nums = [123, 5, 9, 1, 45, 10, 66];

// 1.
var res1 = [];

for (var i = nums.length - 1; i >= 0; i--) {
    // 第一轮: i: 6
    res1.push(nums[i]);
}
console.log(res1);

// 2.
var res2 = [];

for (var num of nums) {
    res2.unshift(num);
}
console.log(res2);
