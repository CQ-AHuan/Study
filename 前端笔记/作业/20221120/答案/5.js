// 查找nums数组中，有没有个位数，如果有，打印第一个匹配的数字的索引，否则打印-1
var nums = [123, 5, 9, 1, 45, 10, 66];
var idx = -1;

for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] < 10) {
        console.log(i);
        idx = i;
        break;
    }
}

if (idx === -1) {
    console.log(-1);
}
