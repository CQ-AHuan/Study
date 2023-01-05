// 找到规律，通过已知数组，生成新数组
// // 案例1: 已知数组
// var arr = ['a', 'b', 'a', 'c', 'c', 'c'];

// // 案例1: 期待得到的数组
// var result = ['a', 'b', 'c'];

// // 案例2: 已知数组
// var arr = ['1', 1, 1, 2, 3, 1];

// // 案例2: 期待得到的数组
// var result = ['1', 1, 2, 3];

var arr = ['a', 'b', 'a', 'c', 'c', 'c'];

var res = []; // ['a']
for (var item of arr) {
    // item: 'a', 'b', ...

    // 先找res数组中没有'a'
    var hasThisItem = false;
    for (var resItem of res) {
        // resItem: res中的数组项
        if (resItem === item) {
            hasThisItem = true;
        }
    }

    // 没有找到'a' 再推进新数组
    if (!hasThisItem) {
        res.push(item);
    }
}
console.log(res);
