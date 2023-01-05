// 期待输出:
// [ ['a', 3], ['*', 3], ['b', 2], ['c', 4], ['d', 7] ]
var arr = ['a', 'a', 'a', '*', 'b', 'b', '*', 'c', 'c', 'c', 'c', '*', 'd', 'd', 'd', 'd', 'd', 'd', 'd'];

var res = [];
for (var letter of arr) {
    // letter: 'a', '*', 'b', ...

    // 1. 找关于'a'的元组
    var finded = undefined;
    for (var item of res) {
        // item: ['a', 3], ['b', 2]
        if (item[0] === letter) {
            finded = item;
            break;
        }
    }

    // 遇到第一个'a'时(res中没有关于'a'的元组)
    if (finded === undefined) {
        res.push([letter, 1]);
    } else {
        // 之后再遇到'a'时
        // 找到res中的['a', xxx] 让该项[1]++
        finded[1]++;
    }
}

console.log(res);
