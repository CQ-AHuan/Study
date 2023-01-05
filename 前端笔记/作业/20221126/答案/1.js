// 封装一个函数，输入一个数组，返回所示数组
function transform(arr) {
    var res = [];
    for (var item of arr) {
        // item: '张三'
        if (item.length === 2) {
            res.push(item);
        }
    }
    return res;
}

var arr = [
    '张三',
    '张三三',
    '李四',
    '王五',
    '王五五',
];
// 筛选两个字的数据
console.log( transform(arr) ); // ['张三', '李四', '王五']
