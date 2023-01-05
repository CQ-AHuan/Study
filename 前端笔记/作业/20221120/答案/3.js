// 统计nums数组中，大于10的数字的个数
var nums = [123, 5, 9, 1, 45, 10, 66];

var count = 0;
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 123, 5, ...
    if (nums[i] > 10) {
        count++;
    }
}
console.log(count);
