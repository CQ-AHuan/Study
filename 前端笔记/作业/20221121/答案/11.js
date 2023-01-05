// 已知一个固定格式的学生成绩数组, 筛选成绩大于等于80分的信息组成的新数组
var arr = [
    { name: '张三', score: 89 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
];
// 输出: [{ name: '张三', score: 89 }, { name: '李四', score: 90 }]

var res = [];
for (var item of arr) {
    // 期待: 满足条件的数组项
    // item: { name: '张三', score: 89 }
    // 小期待: 89
    // item.score
    if (item.score >= 80) {
        res.push(item);
    }
}
console.log(res);
