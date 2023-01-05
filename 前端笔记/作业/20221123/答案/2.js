// 封装一个函数, 输入几个对象, 返回合并后的新对象
function merge(...objs) {
    var res = {};
    for (var obj of objs) {
        // obj: { a: 1, b: 2 }
        for (var key in obj) {
            // 'a': key
            // 1: obj[key]
            res[key] = obj[key];
        }
    }
    return res;
}

console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a: 1, b: 2, c: 3, d: 4}
console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, a: 6 })); // {a: 6, b: 2, c: 3, d: 4, e: 5}
