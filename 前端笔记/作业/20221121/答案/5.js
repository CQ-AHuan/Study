// 5.已知一个固定格式的数组, 返回数组中所有value的平均值
var arr = [
  { name: '张三', score: 89 },
  { name: '李四', score: 90 },
  { name: '王五', score: 78 },
];

var sum = 0;
for (var item of arr) {
    // 期待: 89
    // item.score: 89
    sum += item.score;
}
console.log(sum / arr.length);
