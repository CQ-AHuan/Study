// 已知一个固定格式的学生成绩数组, 判断有无成绩大于等于80分的学生, 如果有输出true, 否则输出false
// 如:
var arr = [
    { name: '张三', score: 89 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
];
// 输出: true

var hasGoodStudent = false;
for (var item of arr) {
    // 期待: 89
    // item.score: 89
    if (item.score >= 80) {
        console.log(true);
        hasGoodStudent = true;
        break;
    }
}

if (!hasGoodStudent) {
    console.log(false);
}
