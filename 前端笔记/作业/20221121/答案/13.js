// 已知一个固定格式的学生成绩数组, 判断有无成绩大于等于80分的学生, 如果有输出第一个匹配项的索引, 否则输出-1
// 如:
var arr = [
    { name: '张三', score: 54 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
];
// 输出: 1

var idx = -1;
for (var i = 0; i < arr.length; i++) {
    if (arr[i].score >= 80) {
        idx = i;
        break;
    }
}

console.log(idx);
