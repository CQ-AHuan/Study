// 已知两个对象, 将他们合并为一个新对象
// 案例1:
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
// 输出: { a: 1, b: 2, c: 3, d: 4 }

// 案例2:
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 3, d: 4 };
// 输出: { a: 3, b: 2, d: 4 }

var res = {};
for (var key in obj1) {
    // key: 'a'
    // obj1[key]: 1
    res[key] = obj1[key];
}

for (var key in obj2) {
    // key: 'a'
    // obj2[key]: 1
    res[key] = obj2[key];
}
console.log(res);
