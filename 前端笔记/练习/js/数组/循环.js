var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 求nums所有数字的和
var sum = 0;
for (var i = 0; i < nums.length; i++) {
    // i: 0-9
    // nums[i]: 1-10
    sum += nums[i];
}
console.log(sum);

// 2. 求nums所有奇数的和
var sum = 0;
for (var i = 0; i < nums.length; i++) {
    // i: 0-9
    // nums[i]: 1-10
    if (nums[i] % 2 === 1) {
        sum += nums[i];
    }
}
console.log(sum);

// 3. 求nums所有数字的平均值
var sum = 0;
for (var i = 0; i < nums.length; i++) {
    // i: 0-9
    // nums[i]: 1-10
    sum += nums[i];
}
console.log(sum / nums.length);

// 进阶: 找nums所有数字中是否有质数
