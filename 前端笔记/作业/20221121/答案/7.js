// 7.已知两个等长数组, 将他们合并所示新数组
var arr1 = ['张三', '李四', '王五'];
var arr2 = [89, 90, 78];
// 输出: [{ name: '张三', score: 89 }, { name: '李四', score: 90 }, { name: '王五', score: 78 }]

var res = [];
for (var i = 0; i < arr1.length; i++) {
    var studentName = arr1[i]; // '张三'
    var score = arr2[i]; // 89

    // res.push({
    //     name: studentName,
    //     score: score, // es5
    // });
    res.push({
        name: studentName,
        score, // es6
    });
}
console.log(res);
