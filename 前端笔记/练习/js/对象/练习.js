// 1.
var person = {
    name: 'zhangsan',
    age: 12,
    sex: '男',
};
// 期待得到如下新对象
// {
//     zhangsan: 'name',
//     12: 'age',
//     男: 'sex',
// }
var res = {};
for (var key in person) {
    // key: 'name', 'age', 'sex'
    // person[key]: 'zhangsan', 12, '男'
    res[person[key]] = key;
}
console.log(res);

// 2. 计算平均分
var students = {
    张三: 89,
    李四: 10,
    王五: 96,
};
var sum = 0;
var count = 0;
for (var studentName in students) {
    // studentName: '张三', ...
    // students[studentName]: 89, ...
    sum += students[studentName];
    count++;
}
console.log(sum / count);

// 3. 计算班级的各科平均分
var students = {
    张三: {
        语文: 20,
        数学: 50,
    },
    李四: {
        语文: 15,
        数学: 51,
    },
    王五: {
        语文: 25,
        数学: 52,
    },
};
// 期待得到:
// {
//     语文: 20,
//     数学: 51,
// }

var res = {
    语文: 0,
    数学: 0,
};
var count = 0;
for (var studentName in students) {
    // studentName: '张三', ...
    // students[studentName]: { 语文: 20, 数学: 50 }, ...
    res.语文 += students[studentName].语文;
    res.数学 += students[studentName].数学;
    count++;
}
res.语文 /= count;
res.数学 /= count;
console.log(res);
