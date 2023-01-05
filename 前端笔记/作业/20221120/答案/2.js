// 2.查找nums数组中，有没有三位数的数字，如果有，打印true，否则打印false
var nums = [123, 5, 9, 1, 45, 10, 66];

// 假装没有
var hasThreeDigit = false;
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 123, 5, ...
    if (nums[i] > 99 && nums[i] < 1000) {
        hasThreeDigit = true;
        console.log(true);
        break;
    }
}
if (!hasThreeDigit) {
    console.log(false);
}
