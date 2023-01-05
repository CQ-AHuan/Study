// 封装一个函数，输入一个数组，返回所示数组(随机年龄(10-80岁))
function randomInt(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}

function transform(arr) {
    var res = [];
    for (var name of arr) {
        // name: 'zs'
        // 期待: { name: 'zs', age: 18 }
        res.push({
            name,
            age: randomInt(10, 80),
        });
    }
    return res;
}

var arr = ['zs', 'ls', 'ww'];
console.log( transform(arr) );
// [{ name: 'zs', age: 18 }, { name: 'ls', age: 21 }, { name: 'ww', age: 45 }]
