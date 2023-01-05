// 已知对象
var students = {
    张三: 89,
    李四: 90,
    王五: 78,
};
// 期待数组
var expect = [
    { name: '张三', score: 89 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
];

var res = [];
for (var studentName in students) {
    // 期待: '张三'， 89
    // studentName: '张三'
    // students[studentName]: 89
    res.push({
        name: studentName,
        score: students[studentName],
    });
}
console.log(res);
