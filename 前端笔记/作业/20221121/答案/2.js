// 2. 统计对象键值对的个数
// 如:
var students = {
    张三: 89,
    李四: 90,
    王五: 78,
};

var count = 0;
for (var studentName in students) {
    count++;
}
console.log(count);
