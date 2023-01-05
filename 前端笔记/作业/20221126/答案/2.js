// 封装一个函数，输入一个数组，返回所示结果

function transform(arr, count) {
    for (var item of arr) {
        // item: '张三'
        if (item.length === count) {
            return item;
        }
    }
}

var arr = [
    '张三',
    '张三三',
    '李四',
    '王五',
    '王五五',
];

console.log( transform(arr, 2) ); // '张三'
console.log( transform(arr, 3) ); // '张三三'
console.log( transform(arr, 4) ); // undefined