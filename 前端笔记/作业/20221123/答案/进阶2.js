// 封装一个函数, 输入所示数组,返回数组中所有数字的和
function getSum(arr) {
    // 期待: 所有的数字
    var sum = 0;
    for (var item of arr) {
        if (typeof item === 'number') {
            sum += item;
        } else {
            sum += getSum(item); // 递归
        }
    }
    return sum;
}

console.log( getSum([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]) ); // 55
