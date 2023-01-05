// 10. 如:
var arr = ['a', 'b', 'c', 'a', 'b', 'a'];
// 输出: { a: 3, b: 2, c: 1 }

var res = {

};

for (var item of arr) {
    // item: 'a', 'b', 'c', ...
    // 第一次看见a的时候(res中没有a的时候)
    if (!res[item]) {
        res[item] = 1;
    } else {
        // 第二次看见a的时候
        res[item]++;
    }
}
console.log(res);
