// 8.已知一个固定格式的数组, 生成所示新对象
// 输出: { a: 1, b: 2, c: 3 }
var arr = [
  { key: 'a', value: 1 },
  { key: 'b', value: 2 },
  { key: 'c', value: 3 },
];

var res = {};
for (var item of arr) {
    // 期待: 'a', 1
    // item.key: 'a'
    // item.value: 1
    res[item.key] = item.value;
}
console.log(res);
