//第三题。 封装一个函数，输入一个数组，返回是否每一项的字符数都在给定范围内
// function transform(arr, count) {
//     // es5
//     // const min = count[0];
//     // const max = count[1];

//     // es6
//     const [min, max] = count;
// }

function transform(arr, [min, max]) {
    // min: 2
    // max: 3
    for (var item of arr) {
        // 找不符合要求的
        // if (item.length < min || item.length > max) {
        //     return false;
        // }
        if (!(item.length >= min && item.length <= max)) {
            return false;
        }
    }
    return true;
}

var arr = [
    '张三',
    '张三三',
    '李四',
    '王五',
    '王五五',
];

console.log( transform(arr, [2, 3]) ); // 是否每一项的字符数都在2到3之间 true
console.log( transform(arr, [1, 3]) ); // 是否每一项的字符数都在1到3之间 true
console.log( transform(arr, [3, 4]) ); // 是否每一项的字符数都在3到4之间 false