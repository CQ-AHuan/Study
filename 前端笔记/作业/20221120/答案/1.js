// 筛选nums数组中的奇数，放入新数组中
var nums = [123, 5, 9, 1, 45, 10, 66];
var newNums = [];
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 123, 5, ...
    if (nums[i] % 2 === 1) {
        newNums.push(nums[i]);
    }
}
console.log(newNums);
