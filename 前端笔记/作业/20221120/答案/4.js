// 4 查找nums数组中,有没有5的倍数的数字
// 如果有, 打印第一个匹配的数字, 否则打印undefined
var nums = [123, 5, 9, 1, 45, 10, 66, 0];
var finded = undefined;

for (var num of nums) {
    // num: 123, 5, ...
    if (num % 5 === 0) {
        console.log(num);
        finded = num;
        break;
    }
}

if (finded === undefined) {
    console.log(undefined);
}
