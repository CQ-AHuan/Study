// 已知两个对象, 将他们合并为一个新对象
// 案例1:
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
// 输出: { a: 1, b: 2, c: 3, d: 4 }

// 案例2:
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 3, d: 4 };
// 输出: { a: 4, b: 2, d: 4 }

var res = {}; // { a: 1, b: 2 }  res.c: undefined

// 把对象1的值复制给res
for (var key in obj1) {
    res[key] = obj1[key];
}

for (var key in obj2) { // { a: 3, d: 4 }
    // 'a': key
    // 3: obj2[key]
    // 判断如果res中有'a', 就找到对应的值进行计算
    if (res[key] !== undefined) {
        // 1: res['a']
        res[key] += obj2[key];
    } else {
        // 判断如果res中没有'a', 就直接赋值
        res[key] = obj2[key];
    }
}
