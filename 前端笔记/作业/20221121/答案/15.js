//15. 已知一个固定格式的学生成绩数组, 判断有无成绩大于等于80分的学生, 如果有输出第一个匹配的学生的名字, 否则输出undefined
var arr = [
    { name: '张三', score: 89 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
];
// 输出: 张三
var studentName = undefined;
for (var item of arr) {
    if (item.score >= 80) {
        studentName = item.name;
        break;
    }
}
console.log(studentName);

