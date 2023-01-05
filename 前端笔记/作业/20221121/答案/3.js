// 如:
var students = {
    张三: 89,
    李四: 90,
    王五: 78,
};
// 输出: ['张三', '李四', '王五']

var res = [];
for (var studentName in students) {
    // 期待: '张三'
    // studentName: '张三'
    res.push(studentName);
}
console.log(res);
