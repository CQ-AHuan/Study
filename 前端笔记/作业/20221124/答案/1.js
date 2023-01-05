// 封装一个函数，输入一个数组，返回所示数组(可以使用dayjs)
// 引入dayjs
function transform(arr) {
    var res = [];
    for (var timestamp of arr) {
        // timestamp: 1654391203037
        // 期待: '2022-06-05 09:06:43'
        res.push(dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss'));
    }
    return res;
}

var arr = [
    1654391203037,
    1655085661533,
    1641191678713,
];
console.log( transform(arr) );
// ['2022-06-05 09:06:43', '2022-06-13 10:01:01', '2022-01-03 14:34:38']
