// 封装一个函数，输入一个数组，返回所示数组
function transform(arr) {
    var res = [];
    for (var item of arr) {
        // item: { name: 'zs', time: 1654391203037 }
        // 期待: 'zs:2022-06-05'
        var date = dayjs(item.time).format('YYYY-MM-DD'); // '2022-06-05'
        res.push(`${ item.name }:${ date }`);
    }
    return res;
}

var arr = [
    {
        name: 'zs',
        time: 1654391203037,
    },
    {
        name: 'ls',
        time: 1655085661533,
    },
    {
        name: 'ww',
        time: 1641191678713,
    },
];

console.log( transform(arr) );
// ['zs:2022-06-05', 'ls:2022-06-13', 'ww:2022-01-03']