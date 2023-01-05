// 4. 生成对象中所有的值组成的新数组
// 如:
var students = {
    张三: 89,
    李四: 90,
    王五: 78,
};
var res = [];
for (var studentName in students) {
    // 期待: 89
    // students[studentName]: 89
    res.push(students[studentName]);
}
console.log(res);
